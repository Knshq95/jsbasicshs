// input using prompt-sync method
//make sure node and npm are installed
//run npm install prompt-sync

const prompt = require('prompt-sync')()
let a = prompt('enter any value:') // prompt takes every input as string make sure to use parseInt fnc for nos.
console.log(a);

/* 
input using readline method
*/
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question('enter any value:',(input) => {
    console.log(`your value is: ${input}`);
})