const axios = require('axios');
const path = require('path');
const https = require('https');
const rootCas = require('ssl-root-cas').create();

rootCas.addFile(path.resolve(__dirname, 'intermediate.pem'));
const httpsAgent = new https.Agent(/*{ca: rootCas}*/);
//https.globalAgent.options.ca = rootCas;
https.globalAgent.options.rejectUnauthorized=false;

axios.get('https://api.github.com/repos/yaoqs/Issues-LordYao/issues?labels=blog')
  .then(function (response) {
    console.log(JSON.parse(response));
  })
  .catch(function (error) {
    console.log(error);
  });
