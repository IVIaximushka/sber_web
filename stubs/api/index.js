const router = require('express').Router();
const listRouter = require('./questions');

module.exports = router;

router.use('/questions', listRouter);
