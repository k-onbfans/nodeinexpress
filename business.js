const request = require('request-promise-native')

var response = 'a';

function CallToBackEnd(req,url,method){

    var options = {
        method:method,
        uri:url,
        body:req.body,
        json:true
    }
    request(options).then(function(res) {
        console.log(res);
        return res;
    }).catch(function(err){
        console.log(err)
    })
}


exports.CallToBackEnd = CallToBackEnd;
