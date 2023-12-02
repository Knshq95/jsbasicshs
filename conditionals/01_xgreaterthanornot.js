const prompt = require('prompt-sync')()

let x = parseInt(prompt('enter x:'))

mssg = (x>10)?"x is greater than 10":"x is not greater than 10"

console.log(mssg);