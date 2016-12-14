var express = require('express');
var router = express.Router();


//all
router.use(function(req, res, next){
	next();
})

//index
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
