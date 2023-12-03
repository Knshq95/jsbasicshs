//solution for question 7 as well

const prompt = require('prompt-sync')()

let dkms = prompt("enter distance in kms: \t")

let dm = dkms * 1000
let dcms = dkms * 100000

let dfeet = dkms * 3280.84
let dinches = dkms * 39370.1

console.log(`distance in m: ${dm}`)
console.log(`distance in cms: ${dcms}`);
console.log(`distance in feet: ${dfeet}`);
console.log(`distance in inches: ${dinches}`);
