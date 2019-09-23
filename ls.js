module.exports=(callback)=>{
const fs=require('fs');
fs.readdir('./', 'utf-8', (err, files)=>{
    if(err){throw err;}
    else{
       callback(files.join('\n'));
     ///   process.stdout.write('\nprompt > ');
    }
   
})
}