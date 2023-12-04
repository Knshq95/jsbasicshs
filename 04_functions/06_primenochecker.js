function primeOrNot(n){
    for(let i = 2; i<n; i++){
        if(n%i == 0){
            return false
        }
    }
    return true
}

const prompt = require('prompt-sync')()

let a = parseInt(prompt('enter no:'))
console.log(primeOrNot(a));