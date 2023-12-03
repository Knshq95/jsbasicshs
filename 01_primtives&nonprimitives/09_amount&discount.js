const prompt = require('prompt-sync')()

let quantity = parseInt(prompt('enter quantity: '))
let rate = parseInt(prompt('enter rate(price/unit): '))
let discount = parseInt(prompt('enter discount:'))


let amount = quantity * rate

let discamount =  (discount/100) * amount

let amountafterdisc = amount - discamount


console.log(`amount : ${amount}`);
console.log(`discount : ${discamount}`);
console.log(`final amount : ${amountafterdisc}`);

