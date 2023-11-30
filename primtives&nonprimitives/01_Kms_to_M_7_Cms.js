const prompt = require('prompt-sync')()

let dkms = prompt("enter distance in kms: \t")

let dm = dkms * 1000
let dcms = dkms * 100000

console.log(`distance in m: ${dm}`)
console.log(`distance in cms: ${dcms}`);
