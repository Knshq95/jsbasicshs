function exponent(b,p){
    return b**p
}

const prompt = require('prompt-sync')()

let base = parseInt(prompt("enter base: "))
let power = parseInt(prompt("enter power: "))

console.log(exponent(base, power));