const prompt = require('prompt-sync')()

let a = parseInt(prompt('enter a:'))
let b = parseInt(prompt('enter b:'))

c = a.toString(2)
d = b.toString(2)


console.log(`${c} & ${d} = ${(c & d)}`)
console.log(`${c} | ${d} = ${(c | d)}`)
console.log(`${c} ^ ${d} = ${(c ^ d)}`)
console.log(`~${c} = ${(~c)}`)
console.log(`${c} >> 1 = ${(c >> 1)}`)
console.log(`${c} << 1 = ${(c << 1)}`)
console.log(`${c} >>> 1 = ${(c >>> 1)}`)


