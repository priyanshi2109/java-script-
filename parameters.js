// default ,rest and spread parameters of functions 


// // default parameters - where we can assign default values of parameters 
//   function sum(a=1,b=2){
//     return a+b;
//   }   
// console.log(sum()); // 3


//rest parameters - where we can pass multiple arguments as an array

// function abcd(a,b,...c){
//     console.log(a,b,c); // 1 2 [3, 4, 5]
// }
// abcd(1,2,3,4,5); // 1 2 [3, 4, 5]

//spread parameters - where we can pass an array and in objects as individual elements
 

let arr1=[1,2,3,45]
let arr2=[6,7,8,9,...arr1]
console.log(arr2); // [6, 7, 8, 9, 1, 2, 3, 45]
