var express = require('express');
var router = express.Router();

// Get Users Listing
router.get('/', function(req, res, next) {
  res.send('Placeholder'); 
});

module.exports = router;
