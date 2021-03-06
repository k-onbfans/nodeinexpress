const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/',(req,res) => {
    var list = req.body.elements;
    var num = req.body.startIndex;
    list.splice(num,1);
    while(list.length > 1){
        num = num + req.body.interval - 1;
        if(num > list.length-1){
            while(num > list.length-1){
                num = num - list.length;
            }
            list.splice(num,1);
        }else{
            list.splice(num,1);
        }
    }
    res.json({"lastElement" : list[0]})
})

module.exports = router;