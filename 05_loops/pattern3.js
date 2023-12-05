// Question-3:

// WAP to print this

// *****
// *   *
// *   *
// *****

// const prompt = require('prompt-sync')()

// let l = parseInt(prompt('enter l:'))
// let b = parseInt(prompt('enter b:'))

// for (let i=0; i<l; i++){
//     let str=""
//     for(let j=0; j<b; j++){
//         if( (j==0 || j==b-1) || (i==0 || i==l-1)){
//             str+="*"
//         }
//         else{
//             str+=" "
//         }
//     }
//     console.log(str);
// }

// let s = "programming"
// function countVowels(str) {
//     let count = 0
//     let vowels = ['a','e','i','o','u']
//     for (let i =0; i<str.length; i++){
//       if(str[i] in vowels){
//         console.log((str[i] in vowels))
//         count += 1
//       }
//     }
//     return count
// }

// console.log(countVowels(s));

// let s='Able, was I ere I saw Elba!'


// function isPalindrome(str) {
//     let newstr = str.trim().split(" ").join("").toLowerCase().replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g,"")
//     let reverse = ""
//     console.log(newstr);
//     for(let i = newstr.length - 1; i >=0; i-- ){
//         reverse += newstr[i]
//     }
//     console.log(reverse);
//     result = (reverse == newstr)?true:false
//     return result;
//   }

//   console.log(isPalindrome(s));

// function sum(a,b){
//     let sum = 0
//     for(let i = a; i<=b; i++){
//         sum += i
//     }
//     return sum
// }
// const now = new Date()
// const bfrMilliSecs = now.getMilliseconds()
// const bfrSecs = now.getSeconds()
// const bfrTime = bfrSecs * 1000 + bfrMilliSecs
// console.log(sum(1,100000));
// const now2 = new Date()
// const afrMilliSecs = now2.getMilliseconds()
// const afrSecs = now2.getSeconds()
// const afrTime = afrSecs * 1000 + afrMilliSecs
// let timeToFncExec = (afrTime - bfrTime)/1000
// console.log(`time for func to execute:${timeToFncExec}s.`);



// let a = afrTime - bfrTime
// console.log(a);
// console.log(afrTime);
// console.log(bfrTime);
// console.log(now);
// console.log(now2);
