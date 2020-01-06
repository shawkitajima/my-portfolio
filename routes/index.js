var express = require('express');
var router = express.Router();
const feed = require('rss-to-json');

/* GET home page. */
router.get('/', function(req, res, next) {
  feed.load('https://medium.com/feed/@shawkitajima', function(err, rss) {
    let articles = [];
    rss.items.forEach(article => {
        articles.push({
            title: article.title,
            url: article.url
        });
    });
    res.render('about', {
        articles
    });
  });
});
router.get('/download', function(req, res) {
  const file = 'public/images/resume.pdf';
  res.download(file);
})

module.exports = router;
