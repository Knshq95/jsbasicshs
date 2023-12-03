const prompt = require('prompt-sync')()

let a = parseInt(prompt('enter a boolean value:'))

if ((a || 1)&&(!a)) 
    console.log('code in if block');

else
    console.log('code in else block');