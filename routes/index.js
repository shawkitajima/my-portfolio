var express = require('express');
var router = express.Router();
const feed = require('rss-to-json')

/* GET home page. */
router.get('/', function(req, res, next) {
  feed.load('https://medium.com/feed/@shawkitajima', function(err, rss) {
    let articles = [];
    rss.items.forEach(article => {
        articles.push({
            title: article.title,
            url: article.url
        });
    })
    res.render('about', {
        articles
    })
  })
});

module.exports = router;
