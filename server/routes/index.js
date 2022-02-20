var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Generate PDF and return the link */
router.get('/pdf', function(req, res, next) {
  res.send(req.body)
  //res.render('index', { title: 'Express' });
});


module.exports = router;
