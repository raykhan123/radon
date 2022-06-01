const express = require('express');
const externalModule = require('../lodger/logger')
const external = require('../validator/formatter')
const externalsrc =  require('../util/helper')
const router = express.Router();

router.get('/test-me', function (req, res) {
   
    externalModule.log()
    external.batch()
    external.low()
    external.trim()
    externalsrc.printDate()
    externalsrc.printMonth()
    externalsrc.getBatchInfo()
    res.send('My first ever api!')
});    
module.exports = router;
// adding this comment for no reason