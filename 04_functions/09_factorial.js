function factorial (n){
    if(n == 1)
        return 1
    return (n * factorial(n-1))
}

const prompt = require('prompt-sync')()

let a = parseInt(prompt("enter no.:"))

console.log(factorial(a));