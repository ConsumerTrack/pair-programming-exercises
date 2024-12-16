const express = require('express');
const router = express.Router();

const creativesRouter = require('./creatives'); 
router.use('/creatives', creativesRouter);

module.exports = router;
