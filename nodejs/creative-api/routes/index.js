const express = require('express');
const router = express.Router();

const creativesRouter = require('./creatives'); 
router.get('/test', (req, res) => res.send("hellio"));


router.use('/creatives', creativesRouter);

module.exports = router;
