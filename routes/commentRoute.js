const router = require('express').Router();
const { loadComments, validate, createComment, removeComment } = require('../controllers/comments');
const commentAuth = require('../middlewares/commentAuth');
const requireAuth = require('../middlewares/requireAuth');
//comments
router.param('comment', loadComments);
router.post('/comment/:question/:answer?', [requireAuth, validate], createComment);
router.delete('/comment/:question/:comment', [requireAuth, commentAuth], removeComment);
router.delete('/comment/:question/:answer/:comment', [requireAuth, commentAuth], removeComment);

module.exports = router;
