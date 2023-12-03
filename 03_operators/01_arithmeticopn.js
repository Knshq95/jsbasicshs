const prompt = require('prompt-sync')()

let no1 = parseInt(prompt('enter no. 1:'))
let no2 = parseInt(prompt('enter no. 2:'))


//all arithmetic operations
console.log(`${no1} + ${no2} = ${no1 + no2}`)
console.log(`${no1} - ${no2} = ${no1 - no2}`)
console.log(`${no1} * ${no2} = ${no1 * no2}`)
console.log(`${no1} / ${no2} = ${no1 / no2}`)
console.log(`${no1} ** ${no2} = ${no1 ** no2}`)
console.log(`${no1} % ${no2} = ${no1 % no2}`)
console.log(`${no1}++ = ${no1++}`)
console.log(`++${no1} = ${++no1}`)
console.log(`${no1}-- = ${no1--}`)
console.log(`--${no1} = ${--no1}`)
