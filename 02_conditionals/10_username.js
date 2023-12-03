const prompt = require('prompt-sync')()

let username = prompt('enter username:')

if(username.length<6){
    console.log("username is too short.");
}
else if(username.length>15){
    console.log("username is too long.");
}
else if(username.length<=15 && username.length>=6){
    console.log("username accepted.");
}
else{
    console.log('username invalid.');
}