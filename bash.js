process.stdout.write('prompt > ');
function done(output){
  process.stdout.write(output);
  process.stdout.write('\n prompt>');
}
process.stdin.on('data', (data) =>{
  const cmd = data.toString().trim().split(' ');
  //console.log(cmd);
  /*if (cmd === 'pwd'){
   const temp=require('./pwd.js')();
  }
  else{
    process.stdout.write('You typed: ' + cmd);
  }*/
  const temp=require(`./${cmd[0]}`);
  cmd.shift();
  temp(done, ...cmd);
  
})
