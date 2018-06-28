const express = require('express');
const router = express.Router();

const usersRouter = require('./users');

router.get('/', (req, res, next) => {
    res.send('OK')
});

router.use('/users', usersRouter);

module.exports = router;
