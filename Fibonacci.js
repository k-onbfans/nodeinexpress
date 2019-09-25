const express = require('express');
const router = express.Router();

router.post('/:length',(req,res) => {
    const first = 0;
    const second = 1;
    var result = new Array();
    result[0] = first;
    if(req.params.length > 1){
        result[1] = second;
            if(req.params.length > 2){
                for(var i = 2;i < req.params.length;i++){
                    result[i] = result[i-1] + result[i-2];
                }
            }
    }
    res.send(result)

})

module.exports = router;