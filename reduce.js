// reduce 9 in js


//get the total sum of the given array

// let arr = [1,4,5,7,9]
// let sum= arr.reduce(function(acc,val){
//    return acc+ val;
// },0)
// console.log(sum) // 26

// get the product of array

// let arr = [1, 2, 3, 4]
// let product = arr.reduce(( acc,val)=>{
//      return acc*val;
// },1)
// console.log(product)


// Array me sabse bada number find karo.

// let arr = [12, 45, 7, 89, 23]
// let maximum = arr.reduce(function(acc,val){
//    if(acc>val){
//       return acc // true value humesha woh acc ko return hogi
//    }
//    else{ 
//       return val
//    }
// })
// console.log(maximum)


// Array ke sabhi elements ka average nikalo.


// let arr = [10, 20, 30, 40];

// let sum = arr.reduce((acc, val) => {
//     return acc + val;
// }, 0);

// let average = sum / arr.length;
// console.log("Average =", average);



// Array me even numbers ka sum nikalo.

// let arr = [1, 2, 3, 4, 5, 6];

// let evenSum = arr.reduce((acc, val) => {
//     if (val % 2 === 0) {
//         return acc + val;
//     }
//     return acc;
// }, 0);

// console.log(evenSum);  // 12




//Count karo kitne even numbers hain.

// let arr = [1, 2, 3, 4, 5, 6, 8]
// let counteven = arr.reduce(function(acc,val){
//    if(val%2===0){
//       return acc = acc+1;
//    }
//    return acc
// },0)
// console.log(counteven)



//String array ko ek string me join karo.

// let arr = ["Hello", "World", "JS"]
// let stringjoin= arr.reduce(function(acc,val){
//    return acc+" "+ val
// })
// console.log(stringjoin)


// count the total character of string array


// let arr = ["cat", "elephant", "dog"]
// // Expected:
// // 14
// // let stringlength = arr.map(function(val){
// //    return val.length
// // })
// // console.log(stringlength)
// let count = arr.reduce(function(acc,val){
//    return acc+val.length
// },0)
// console.log(count)




// get the sum of all positive numbers 
// Sabhi positive numbers ka sum nikalo.


let arr = [-2, 5, -1, 8, 3]
let sumpositive = arr.reduce(function(acc,val){
   if(val>0){
       return acc+val
   }
   return acc
},0)
console.log(sumpositive)



