const prompt = require('prompt-sync')()

let color = prompt('enter color of the fruit:')

if(color == "red"){
    console.log("it is apple.");
}
else if(color == "yellow"){
    console.log("it is banana.");
}
else if(color == "orange"){
    console.log("it is orange.");
}
else{
    console.log("it is some other fruit.");
}
