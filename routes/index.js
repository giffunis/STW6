var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', quizController.home);

/* GET quizes/question page. */
router.get('/quizes/question', quizController.question);

/* GET quizes/answer page.*/
router.get('/quizes/answer', quizController.answer);

/* GET quizes/questions page.*/
router.get('/quizes/questions', quizController.questions);

/* GET quizes/questions/:id */
router.get('/quizes/questions/:id', quizController.choosedQuestion);

module.exports = router;
