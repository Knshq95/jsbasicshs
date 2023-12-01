const prompt = require('prompt-sync')()

let n = parseInt(prompt('enter n:'))

let sum = 0;
let avg;


for (let a, i = 0; i < n; i++) {
    a = parseInt(prompt(`enter number ${i+1}:`))
    sum += a
}

avg = sum/n

console.log(`average is: ${avg}`);