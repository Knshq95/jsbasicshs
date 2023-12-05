// Question-2: 

// WAP to print this 

//    *
//   ***
//  *****
// *******

// const prompt = require('prompt-sync')()

// let n = parseInt(prompt('enter n:'))


// for(let i = 0; i<n; i++){
//     let str1 = ""
//     let str2 = ""

//     for(let j = 1; j<n-i; j++){
//         str1 += " "
//     }
//     for(let k = 0; k<i+1; k++){
//         str2 += "*"
//     }
//     for(let l =0; l<i; l++){
//         str2 += "*"
//     }
//     console.log(str1,str2);

// }


for (let i = 1; i <= 4; i++) {
    let str = "";
    for (let j = 1; j <= 7; j++) {
        if (j >= 5 - i && j <= 3 + i) {
            str += "*";
        } else {
            str += " ";
        }
    }
    console.log(str);
}
