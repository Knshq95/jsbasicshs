const prompt = require('prompt-sync')()

let a = parseInt(prompt('enter no1:'))
let b = parseInt(prompt('enter no2:'))

let largerNo = (a>b)?a:b

console.log("the larger no is ", largerNo);