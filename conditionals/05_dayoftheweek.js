const prompt = require('prompt-sync')()

let dayno = parseInt(prompt('enter day of the week:'))

switch(dayno){
    case 1:
        console.log("monday");
        break
    case 2:
        console.log("tuesday");
        break
    case 3:
        console.log("wednesday");
        break
    case 4:
        console.log("thursday");
        break
    case 5:
        console.log("friday");
        break
    case 6:
        console.log("saturday");
        break
    case 7:
        console.log("sunday");
        break
    default:
        console.log("enter correct day");
}
