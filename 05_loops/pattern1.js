// Question-1: 

// WAP to print this

// *
// **
// ***
// ****
// *****    


// const prompt = require('prompt-sync')()

// let n = parseInt(prompt('enter n:'))

// for(let i = 0; i<n; i++){
//     let string =""
//     for(let j=0; j<=i; j++){
//         string += "*"
//     }
//     console.log(`${string}`);
// }



// let a = "rail safety"
// let b = "fairy tales"

// function isAnagram(str1, str2) {
//     let x=[...str1].map((item) => item.toLowerCase())
//     x = x.sort().join('')
//     console.log(x);
//     let y=[...str2].map((item) => item.toLowerCase())
//     y = y.sort().join('')
//     console.log(y);
//     let result = (x === y)?true:false
//        return result
//   }
  
// console.log(isAnagram('hello', 'hello!'));


// function findLargestElement(numbers) {
//     let largestElement = numbers[0]
//     for(let i = 0; i<numbers.length; i++){
//        if(numbers[i]>largestElement){
//           largestElement = numbers[i]
//        }
//     }
//     return largestElement
//  }

//  console.log(findLargestElement([3, 7, 2, 9, 1]));


const s = [
   {
      id: 1,
      timestamp: 1656076800000,
      price: 10,
      category: 'Food',
      itemName: 'Pizza',
   },
   {
      id: 2,
      timestamp: 1656259600000,
      price: 20,
      category: 'Food',
      itemName: 'Burger',
   },
   {
      id: 3,
      timestamp: 1656019200000,
      price: 15,
      category: 'Clothing',
      itemName: 'T-Shirt',
   },
   {
      id: 4,
      timestamp: 1656364800000,
      price: 30,
      category: 'Electronics',
      itemName: 'Headphones',
   },
   {
      id: 5,
      timestamp: 1656105600000,
      price: 25,
      category: 'Clothing',
      itemName: 'Jeans',
   },
]

function calculateTotalSpentByCategory(transactions) {
   let output = []
 
   for(let i = 0; i<transactions.length; i++){
     let a = transactions[i]["category"]
     let b = transactions[i]["price"]
     
     let found = false;
     for(let j =0; j<output.length; j++){
       if(a == output[j]["category"]){
         output[j]["totalSpent"] += b
         found = true
         break
       }
     }
 
     if (!found) {
       let entry = {};
       entry["category"] = a;
       entry["totalSpent"] = b;
       output.push(entry);
     }
   }
   return output;
 }

 console.log(calculateTotalSpentByCategory(s));