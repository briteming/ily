# Issues-LordYao

[![GenerateBlog](https://github.com/yaoqs/Issues-LordYao/actions/workflows/GenerateBlog.yml/badge.svg)](https://github.com/yaoqs/Issues-LordYao/actions/workflows/GenerateBlog.yml)
[![pages-build-deployment](https://github.com/yaoqs/Issues-LordYao/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/yaoqs/Issues-LordYao/actions/workflows/pages/pages-build-deployment)
![](https://badgen.net/github/release/yaoqs/Issues-LordYao/stable)

## Introduction

一个完全基于nodejs的博客框架，超轻量级个人博客模板，完全基于Github Pages 、 Github Issues 和 Github Actions。不需要繁琐的本地部署，搭建后直接在issues中写作，项目会自动生成页面。

## Roadmap

- [x] Github Page
- [x] Github Issues
- [x] Github Action
- [x] Nodejs,npm
- [x] 模板引擎
  - [Nunjucks](https://mozilla.github.io/nunjucks/)
- [ ] markdown2html
  - [marked](https://github.com/markedjs/marked)
  - [markdown-it](https://github.com/markdown-it/markdown-it)
- [ ] 评论系统
  - [utteranc.es](https://github.com/utterance/utterances)

## Feature

- 博客写作在Issues中完成后，自动触发Actions执行部署任务生成Pages
- 使用Nunjucks对html进行渲染

## Install/How to use this repository?

- git clone or new a repository by [template](https://github.com/new?template_name=Issues-LordYao&template_owner=yaoqs), then custom repository name
- delete ./docs
- modify '_config.yml' items
- modify 'package.json' -> 'scripts' -> "test'
- new a issue and labeled 'blog'
- "Setting" -> "Pages" -> "Build and deployment" -> "Branch": "./docs"

## References

- [使用github强大的issues功能来写博客](https://github.com/zp1112/blog/issues/3)
- [使用github issue创建blog](https://github.com/lotosbin/lotosbin.github.io/issues/10)
  - **[issue2blog](https://github.com/lotosbin/issue2blog/tree/master)**
- [两款基于 GitHub issues 的博客工具](https://www.v2ex.com/t/253854)
- [基于Github Issues的博客搭建](https://github.com/superleeyom/blog/issues/38)
- [Leeyom's Blog](https://blog.leeyom.top/)
  - [main.py](https://github.com/superleeyom/blog/blob/main/main.py)
  - [.github/workflows/generate_readme.yml](https://github.com/superleeyom/blog/blob/main/.github/workflows/generate_readme.yml)
- [github-push-action/action.yml](https://github.com/ad-m/github-push-action/blob/master/action.yml)
- [Gmeek](https://github.com/Meekdai/Gmeek) is a Blog All in Github.一个博客框架，超轻量级个人博客模板。完全基于Github Pages 、 Github Issues 和 Github Actions。
- [gitblog](https://github.com/yihong0618/gitblog)
- [Nunjucks](https://mozilla.github.io/nunjucks/) A rich and powerful templating language for JavaScript.
  - [使用Nunjucks](https://www.liaoxuefeng.com/wiki/1022910821149312/1100400176397024)
- [marked](https://github.com/markedjs/marked) A markdown parser and compiler. Built for speed.
  - [demo page](https://marked.js.org/demo/)
  - [Marked Documentation](https://marked.js.org/)
- [markdown-it](https://github.com/markdown-it/markdown-it) Markdown parser, done right. 100% CommonMark support, extensions, syntax plugins & high speed
- [utteranc.es](https://github.com/utterance/utterances) A lightweight comments widget built on GitHub issues
  - [Document](https://utteranc.es/)

## License 许可证 & Copyright

- 版权声明：Copyright © 2019-2024 要庆生. All rights reserved.
- 欢迎通过github仓库在线留言或Email <350788415@qq.com>沟通
- 欢迎star、fork或共同参与维护仓库，并请保留页面底部版权信息，谢谢！
