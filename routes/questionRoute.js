const {
    loadQuestions,
    questionValidate,
    createQuestion,
    show,
    listQuestions,
    listByTags,
    listByUser,
    removeQuestion,
    approveQuestion,
    rejectQuestion
  } = require('../controllers/questions');

const router = require('express').Router();

const requireAuth = require('../middlewares/requireAuth');
const questionAuth = require('../middlewares/questionAuth');
const role = require('../middlewares/checkRole');

//questions
router.param('question', loadQuestions);
router.post('/questions', [requireAuth, questionValidate], createQuestion);
router.get('/question/:question', show);
router.get('/question', listQuestions);
router.get('/questions/:tags', listByTags);
router.get('/question/user/:username', listByUser);
router.delete('/question/:question', [requireAuth, questionAuth], removeQuestion);
router.put('/question/approve/:id',[requireAuth,role.checkRole("moderator")],approveQuestion)
router.put('/question/reject/:id',[requireAuth,role.checkRole("moderator")],rejectQuestion)
module.exports = router;