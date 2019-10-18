const express = require('express');
const router = express.Router();
const business = require('./business.js')
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.post('/findbyroute',(req,res) => business.CallToBackEnd(req,res))

module.exports = router;