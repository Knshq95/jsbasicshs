const prompt = require('prompt-sync')()

let a = parseInt(prompt('enter no1:'))
let b = parseInt(prompt('enter no2:'))

let result = (a==b)?`${a}=${b}`:((a>b)?`${a}>${b}`:`${a}<${b}`)
console.log(result);