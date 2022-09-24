const router = require('express').Router();
const answerAuth = require('../middlewares/answerAuth');
const {
  loadAnswers,
  answerValidate,
  createAnswer,
  removeAnswer
} = require('../controllers/answers');
const requireAuth = require('../middlewares/requireAuth');

//answers
router.param('answer', loadAnswers);
router.post('/answer/:question', [requireAuth, answerValidate], createAnswer);
router.delete('/answer/:question/:answer', [requireAuth, answerAuth], removeAnswer);

module.exports = router;
