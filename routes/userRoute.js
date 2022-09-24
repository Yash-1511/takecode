const {
    validateUser,
    validateLoginUser,
    signup,
    authenticate,
    listUsers,
    search,
    find
  } = require('../controllers/users');
const router = require('express').Router();
//authentication


// for register a user
router.post('/signup', validateUser, signup);

// for login user
router.post('/authenticate', validateLoginUser, authenticate);

// for listing user
router.get('/users', listUsers);

// for user search
router.get('/users/:search', search);

// for display user name
router.get('/user/:username', find);
module.exports = router;