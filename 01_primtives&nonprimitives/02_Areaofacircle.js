const prompt = require('prompt-sync')()

let radius = prompt('enter radius:\t')
let area = Math.PI * Math.pow(radius, 2)

console.log(`the area is: ${area}`);
console.log('the area is:', area);