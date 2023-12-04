function add(n1,n2){
    return n1 + n2
}

const prompt = require('prompt-sync')()

let a = parseInt(prompt('enter no1: '))
let b = parseInt(prompt('enter no2: '))

console.log(add(a,b));