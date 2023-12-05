// Question-1: 

// WAP to print this

// *
// **
// ***
// ****
// *****    


const prompt = require('prompt-sync')()

let n = parseInt(prompt('enter n:'))

for(let i = 0; i<n; i++){
    let string =""
    for(let j=0; j<=i; j++){
        string += "*"
    }
    console.log(`${string}`);
}