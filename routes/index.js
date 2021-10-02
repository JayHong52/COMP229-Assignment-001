var express = require('express');
var router = express.Router();

// Get Home Page  
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Home'});
});

// Get Home Page (/home)
router.get('/home', function(req, res, next) {
  res.render('index', {title: 'Home'});
});

// Get About Us Page
router.get('/about', function(req, res, next) {
  res.render('index', {title: 'About Us'});
});

// Get Projects Page
router.get('/projects', function(req, res, next) {
  res.render('index', {title: 'Projects'}); 
});

// Get Service Page 
router.get('/services', function(req, res, next) {
  res.render('index', {title: 'Services'});
}); 

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', {title: 'Contact Us'});
});




module.exports = router;
