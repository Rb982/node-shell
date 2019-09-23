function cat(callback,filename){
    const fs=require('fs');
    fs.readFile(filename, 'utf-8', (err, data)=>{
        if(err) throw err;
        callback(data);
    });
}
module.exports=cat;