const prompt = require('prompt-sync')()

let temp = parseInt(prompt('enter temperature(0-100):'))
let category

if(temp <= 20 && temp >=0){
    category = "low"
}
else if(temp <= 80 && temp >20){
    category = "medium"
}
else if(temp <= 100 && temp >80){
    category = "high"
}
else{
    category = "enter temp within range"
}

console.log(category);