const express = require('express');
const router = express.Router();

router.use('/customers', require('./users'));

module.exports = router;