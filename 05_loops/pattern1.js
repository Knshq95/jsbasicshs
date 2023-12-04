// Question-1: 

// WAP to print this

// *
// **
// ***
// ****
// *****    

for(let i = 1; i<=5; i++){
    let string =""
    for(let j=1; j<=i; j++){
        string += "*"
    }
    console.log(`${string}`);
}