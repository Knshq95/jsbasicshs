const prompt = require('prompt-sync')()

let age = parseInt(prompt('enter age:'))

if(age<18){
    console.log("not elgible");
}
else{
    console.log("eligible");
}