const { listPopulerTags, searchTags, listTags } = require('../controllers/tags');
const router = require('express').Router();

router.get('/tags/populertags', listPopulerTags);
router.get('/tags/:tag', searchTags);
router.get('/tags', listTags);

module.exports = router;