var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

/* GET quizes/question page. */
router.get('/quizes/question', function(req, res, next){
  res.render('quizes/question.ejs');
});

/* GET quizes/answer page.*/
router.get('/quizes/answer', function(req, res, next){
  res.render('quizes/answer.ejs');
});

module.exports = router;
