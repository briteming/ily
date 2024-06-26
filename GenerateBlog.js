const yargs = require("yargs");
//const filenamify = require('filenamify/browser');
const request = require("request");
const moment = require("moment");
const fs = require("fs");
const yaml = require('js-yaml');
const nunjucks=require('nunjucks')

const { marked } = require('marked');
//const demo = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');

var argv=yargs
    .option("u", {
    alias: "user",
    demand: true,
    describe: "your github user name",
    type: "string",
    })
    .option("r", {
    alias: "repo",
    demand: true,
    describe: "your github repository name",
    type: "string",
    })
    .option("l", {
    alias: "labels",
    describe: "issue labels, split by ,",
    type: "string",
    default: "blog",
    })
    .example("generateblog --user yaoqs --repo Issues-LordYao", "")
    .example(
    "generateblog -u yaoqs -r Issues-LordYao -l blog",
    "generate blog by lables"
    )
    .help("h")
    .alias("h", "help")
    .epilog("copyright 2024").argv;

// console.log('hello ', argv.n);

async function getIssues(user, repo, labels) {
    return new Promise((resolve, reject) => {
    const options = {
        method: "GET",
        headers: {
            "user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36",
        },
        rejectUnauthorized:false,
    };

    //https://api.github.com/repos/yaoqs/Issues-LordYao/issues?labels=blog
    var blog=`https://api.github.com/repos/${user}/${repo}/issues?labels=${labels}`;
    //console.log(blog)
    request(blog,options,
    function (error, response, body) {
        if (!error && response.statusCode === 200) {
            resolve(JSON.parse(body));
            //console.log(body)
        } else {
            reject(error || `${response.statusCode}`);
        }
        }
    );
    });
}

async function issueToArticle(issue) {
var URL = require("url").URL;

var fileName = /*filenamify(`${moment(issue.created_at).format("YYYY-MM-DD")}-${issue.id}`);*/`${issue.title}-${moment(issue.created_at).format("YYYYMMDD")}`;
var title = issue.title;
var body = issue.body;
var url = issue.html_url;
var summary = "";
try {
    url = new URL(url.trim());
    summary = `[查看原文](${url})`;
} catch (e) {
    console.log(e);
}
var content = `---
title: "${title}"
commentId: ${issue.id}
tags: ${(issue.labels || []).map((it) => it.name).join(",")}
original_link: "${url}"
summary: "${summary}"
---

${body}

[查看原文](${url})
`;
return { fileName, content };
}

var projectPath="docs";

async function writeArticleToFile(article) {
return new Promise((resolve, reject) => {

    // 使用fs.existsSync()方法检查文件夹是否存在
    if (!fs.existsSync(projectPath)) {
        console.log(`Folder '${projectPath}' does not exist. Creating...`);
        try {
        // 使用fs.mkdirSync()方法创建文件夹
        fs.mkdirSync(projectPath);
        console.log(`Folder '${projectPath}' created successfully.`);
        } catch (error) {
        console.error(`Error creating folder: ${error}`);
        }
    } else {
        console.log(`Folder '${projectPath}' already exists.`);
    }

    var filePath = `${projectPath}/${article.fileName}.md`;

    fs.writeFile(filePath, `${article.content}`, function (err) {
    if (err) {
        console.log(err);
        reject(err);
        return;
    }

    console.log(`generate file ${filePath}`);
    resolve({ filePath });
    });
    });
}

async function getConfig(){
    try {
        let fileContents = fs.readFileSync('_config.yml', 'utf8');
        let data = yaml.load(fileContents);

        //console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
}

var main = async (user, repo, labels) => {
    var issues = await getIssues(user, repo, labels);
    //
    var bloglist = [];
    var bloglisthtml=[];
    //
    for (i in issues) {
        var issue = issues[i];
        //console.log(issue)
        var article = await issueToArticle(issue);
        await writeArticleToFile(article);
        var repository_url= `https://${user}.github.io/${repo}`;
        var filePath = `${projectPath}/`;
        bloglist[i]=`- [${article.fileName}](https://${user}.github.io/${repo}/${article.fileName})  ([查看原文](${issue.html_url}))
`;
        bloglisthtml[i]=`<span><a href="https://${user}.github.io/${repo}/${article.fileName}">${article.fileName}</a></span><br>`;
        //console.log(readme)
        //console.log(bloglist[i])
    }


    /*//HowtoUseMe.md
    fs.copyFileSync('README.md','docs/HowtoUseMe.md',fs.constants.COPYFILE_FICLONE,function (err) {
        if (err) {
            console.log(err);
            reject(err);
            return;
        }
    });
    bloglist[0]=`- [HowtoUseMe](https://${user}.github.io/${repo}/HowtoUseMe})  ([查看原文](https://github.com/${user}//${repo}/))
`;*/


    //readme.md
    var README=`# ${user}

## Toc

`;

    fs.writeFileSync('docs/README.md',README+bloglist,function (err) {
        if (err) {
            console.log(err);
            reject(err);
            return;
        }
    });

    var config=await getConfig();
    //console.log(typeof(config.slogan))
    //index.html
    var env=nunjucks.configure({ autoescape: false });
    html= env.render('template/base.html',{config:config,body:bloglisthtml});

    var index=fs.writeFileSync('docs/index.html',html,function (err) {
        if (err) {
            console.log(err);
            reject(err);
            return;
        }
        console.log(`generate index.html`);
    });

}

process.on("SIGINT", function () {
    console.log("Got a SIGINT");
    process.exit(0);
});
if (argv.user && argv.repo) {
    main(argv.user, argv.repo, argv.labels)
    .then((a) => {
    process.exit(0);
    })
    .catch((reason) => {
    console.log(reason);
    process.exit(1);
    });
} else {
    process.exit(0);
}
