const request = require('request-promise-native')

function CallToBackEnd(req,res){
    var options = {
        method:'POST',
        uri:'http://localhost:8081/findbyroute',
        body:req.body,
        json:true
    }
    request(options).then(function(response){
        res.json(response);
        console.log(response)
    }).catch(function(err){
        console.log(err);
    })
}


exports.CallToBackEnd = CallToBackEnd;
