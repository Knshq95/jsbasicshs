const prompt = require('prompt-sync')()

let n = parseInt(prompt("enter no. of subjects:"))

for(let i = 0; i<n; i++){
    let score = parseInt(prompt(`enter score in subject ${i+1}:`))
    if(score<=100 && score>=90){
        console.log("Grade: A");
    }
    else if(score<90 && score>=80){
        console.log("Grade: B");
    }
    else if(score<80 && score>=70){
        console.log("Grade: C");
    }
    else if(score<70 && score>=60){
        console.log("Grade: D");
    }
    else if(score<60 && score>=50){
        console.log("Grade: E");
    }
    else if(score<50 && score>=0){
        console.log("Grade: F");
    }
    else{
        console.log('enter valid score');
    }
}

