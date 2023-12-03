const prompt = require('prompt-sync')()

let tf = parseInt(prompt('enter temp in fahrenheit: '))

let tc = (tf - 32) * (5/9)

console.log(`temperature in degree celsius is: ${tc}`);