// Question-4:

// WAP to print this

// 1
// 12
// 123
// 1234
// 12345

const prompt = require('prompt-sync')()

let l = parseInt(prompt('enter l:'))

for(let i=1; i<=l; i++){
    let str=""
    for(let j=1; j<=i; j++){
        str += j
    }
    console.log(str);
}