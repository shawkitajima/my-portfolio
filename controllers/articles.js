const request = require('request');
const feed = require('rss-to-json')

module.exports = {
    index
}

function index(req, res) {
    feed.load('https://medium.com/feed/@shawkitajima', function(err, rss) {
        let articles = [];
        rss.items.forEach(article => {
            articles.push({
                title: article.title,
                url: article.url
            });
        })
        res.render('article_index', {
            articles
        })
    })
}
