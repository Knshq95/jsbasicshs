const prompt = require('prompt-sync')()

function primeOrNot(n){
    for(let i = 2; i<n; i++){
        if(n%i == 0){
            return false
        }
    }
    return true
}

let ll = parseInt(prompt('enter lower limit:'))
let ul = parseInt(prompt('enter upper limit:'))
let flag = true

for(let i = ll; i <=ul; i++){
    if(primeOrNot(i)){
        console.log(i);
    }
}
