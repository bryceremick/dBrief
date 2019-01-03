const NewsAPI = require('newsapi');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const smmry = require('smmry')({
  SM_API_KEY: '6DDD6CEFC0'
});


var app = express();
const newsapi = new NewsAPI('aa6047bcfb7d4e6b84e8181fd2291722');

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

/*app.get('/', function (req, res) {

  res.render('index', {
    articles
  });
  //res.json(articles);
})*/


let articles = getArticles();

  Promise.resolve(articles).then(articles => {

    var summaryArr = [];

    articles.forEach(article => {
      var summary = summarizeURL(article.url);
      summaryArr.push(summary);
    });

    Promise.all(summaryArr).then(summaryArr => {
        console.log(summaryArr);
    })
  });


function getArticles () {
 
 const results = newsapi.v2.topHeadlines({
    sources: '' /*'abc-news,bbc-news,cnn,cbs-news,fox-news,independent,msnbc,the-huffington-post,nbc-news,the-new-york-times,the-wall-street-journal,the-washington-post, usa-today'*/ ,
    pageSize: '100',
    country: 'us'
  }).then(response => {
    return response.articles;
  }).catch(err =>{
    console.log('newsapi error: '+err);
  });

  return results;
}

function summarizeURL (url) {

    const results = smmry.summarizeUrl(url).then(response => {
       return response.sm_api_content;
    }).catch(err => {
      console.error('smmry error: '+err);
    });

    return results;
}

app.listen(3000, function () {
  console.log('server started...');
})