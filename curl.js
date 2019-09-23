function curl(callback, filename){
    const request=require('request');
    request(filename, (err, response, body)=>{
        if(err){throw err;}
        if(response) {callback(response);}
        callback(body);
    })
}
module.exports=curl;