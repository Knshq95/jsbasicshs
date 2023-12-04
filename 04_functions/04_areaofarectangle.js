function areaOfReactangle(l,b){
    return l*b
}

const prompt = require('prompt-sync')()

let length = parseInt(prompt("enter length: "))
let breadth = parseInt(prompt("enter breadth: "))

console.log(areaOfReactangle(length, breadth));