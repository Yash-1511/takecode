const router = require("express").Router();
const { upvote, downvote, unvote } = require('../controllers/votes');
const requireAuth = require('../middlewares/requireAuth');

//votes
router.get('/votes/upvote/:question/:answer?', requireAuth, upvote);
router.get('/votes/downvote/:question/:answer?', requireAuth, downvote);
router.get('/votes/unvote/:question/:answer?', requireAuth, unvote);

module.exports = router;