const prompt = require('prompt-sync')()

let n = parseInt(prompt("enter n:"))

let plusminus = (n>0)?"positive":"negative"
let oddeven = (n%2==0)?"even":"odd"

console.log(`the no. is ${plusminus} & ${oddeven}`);