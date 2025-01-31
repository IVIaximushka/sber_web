const router = require('express').Router();
const listRouter = require('./questions');
const questionRouter = require('./question');

module.exports = router;

router.use('/questions', listRouter);
router.use('/question', questionRouter);
