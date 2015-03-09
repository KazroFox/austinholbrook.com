var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'austinholbrook.com' });
});

router.get('/about', function(req, res, next) {
  res.render('about', {title: 'about :: austinholbrook.com'})
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {title: 'contact :: austinholbrook.com'})
});

router.get('/services', function(req, res, next) {
  res.render('services', {title: 'services :: austinholbrook.com'})
});

module.exports = router;
