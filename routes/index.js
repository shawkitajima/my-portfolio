var express = require('express');
var router = express.Router();
var articleCtrl = require('../controllers/articles')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about');
});
router.get('/articles', articleCtrl.index);
router.get('/about', function(req, res) {
  res.render('about');
});
router.get('/github', function(req, res) {
  res.render('github');
})

module.exports = router;
