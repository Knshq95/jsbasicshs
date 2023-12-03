const prompt = require('prompt-sync')()

let l = parseInt(prompt('enter length:'))
let b = parseInt(prompt('enter breadth:'))

console.log(`area: ${l*b}`);
console.log(`perimeter: ${2*(l+b)}`);