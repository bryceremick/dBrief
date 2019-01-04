// Requre Core App
const express = require('express');

// Require Middleware
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Core Modules
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('aa6047bcfb7d4e6b84e8181fd2291722');
const smmry = require('smmry')({
  SM_API_KEY: '6DDD6CEFC0'
});

// Init App
const app = express();

// Setup middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 8081, function () {
  console.log('server started');
})

var articles;

update();
setInterval(update, 60000*10);

app.post('/', (req, res) => {
  Promise.resolve(articles).then(articles => {
    res.send({
      articles
    });
  });
});


/********************* Functions *********************/

function update() {
  articles = getArticles();
  console.log('Updated');
}

function getArticles() {

  const results = newsapi.v2.topHeadlines({
    /*source: 'abc-news,bbc-news,cnn,cbs-news,fox-news,independent,msnbc,the-huffington-post,nbc-news,the-new-york-times,the-wall-street-journal,the-washington-post, usa-today',*/
    sources: '',
    pageSize: '100',
    country: 'us',
    pageSize: 28
  }).then(response => {
    return response.articles;
  }).catch(err => {
    console.log('newsapi error: ' + err);
  });

  return results;
}