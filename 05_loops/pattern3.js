// Question-3:

// WAP to print this

// *****
// *   *
// *   *
// *****

const prompt = require('prompt-sync')()

let l = parseInt(prompt('enter l:'))
let b = parseInt(prompt('enter b:'))

for (let i=0; i<l; i++){
    let str=""
    for(let j=0; j<b; j++){
        if( (j==0 || j==b-1) || (i==0 || i==l-1)){
            str+="*"
        }
        else{
            str+=" "
        }
    }
    console.log(str);
}