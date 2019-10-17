const express = require('express');
const router = express.Router();
const business = require('./business')
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


// router.post('/findbyroute',(req,res) =>{
//     var options = {
//         method:'POST',
//         uri:'http://localhost:8081/findbyroute',
//         body:req.body,
//         json:true
//     }
//     request(options).then(function(response){
//         res.json(response);
//         console.log(response)
//     }).catch(function(err){
//         console.log(err);
//     })
// })

router.post('/findbyroute',(req,res) =>{
    var response = business.CallToBackEnd(req,'http://localhost:8081/findbyroute','POST');
    console.log(response);
    res.send(business.CallToBackEnd(req,'http://localhost:8081/findbyroute','POST'));

})  
module.exports = router;