const prompt = require('prompt-sync')()

let Name = prompt('enter your name:')

function helloGreeter(anyName){
    console.log(`Hello! ${anyName}`)
}

helloGreeter(Name)
