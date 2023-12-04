function fx(n){
    return n + 2
}

function gx(n){
    return 2 * n
}

function hx(a,fn1, fn2){
    return fn1(fn2(a))
}

const prompt = require('prompt-sync')()

let x = parseInt(prompt('enter no:'))
console.log(hx(x, fx, gx));


//below code does the same thing as above using currying functions.



// function fx(n){
//     return n + 2
// }

// function gx(n){
//     return 2 * n
// }

// function hx(a,fn1,fn2){
//     let b = fn2(a)
//     return fn1(b)
// }

// const prompt = require('prompt-sync')()

// let x = parseInt(prompt('enter no:'))
// console.log(hx(x, fx, gx));