const prompt = require('prompt-sync')()

let time = parseInt(prompt('enter time(in 24hr):'))

if(time>=5 && time<12){
    grt = "Good Morning!"
}
else if(time>=12 && time<18){
    grt = "Good Afternoon!"
}
else if(time>=18 && time<22){
    grt = "Good Evening!"
}
else if((time>=22 && time<25) || (time>=1 && time<5)){
    grt = "Good Night!"
}
console.log(grt);