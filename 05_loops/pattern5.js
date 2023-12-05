// Question-5

// WAP to print this

//     A
//    BBB
//   CCCCC
//  DDDDDDD
// EEEEEEEEE

for(let i=1; i<=5; i++){
    let str = "";
    for(let j=1; j<=9; j++){
        if(j>=6-i && j<=4+i){
            str += String.fromCharCode(64+i);
        }else{
            str += " ";
        }
    }
    console.log(str);
}