// arrays 

// find the sum of all elements of an array 

// let arr = [1,2,3,4,5];
// let sum =0;
// // for(let i=0;i<arr.length;i++){
// //     sum = sum+arr[i];
// // }
// // console.log(sum);
// for(let val of arr){
//     sum = sum+val;
// }
// console.log(sum);


// let arr = [1,2,3,4,"priyanshi",6,7,8];
// console.log(arr);
//  let a =arr.push("89");
// console.log(arr,a);
// arr.unshift(7);
// console.log(arr);
// let b = arr.unshift(9);
// console.log(arr ,b);


// spread operator 
// let arr1=[1,2,4,5,67,77,88,88,88,889,99,]
// let arr2=[...arr1,arr];
// console.log(arr2);

// join method 

// let fruits = ["apple","banana","mango","graps"];
// let a = fruits.join(" "); // string me convert kar dega 
// console.log(fruits);
// console.log(a);


// include method = check karega ki element hai ya nhi 
//  let fruits = ["apple","banana","mango","graps"];
// let check = fruits.includes("banana");
// console.log(check);// true 

// find method = find the element in array

// let check =fruits.find(function(fruit){
//   return fruit === "banana";

// })
// console.log(check); // banana

// sort method 

// array iteration method or functional method 

// map method in array= value or uski index deta hai


// let arr = [1,2,3,4,5,];
// let newarr = arr.map(function(value,index){
//     console.log(value,index);
//     return value * 2;
// });
// console.log(newarr);

// filter method = condition k basis per new array deta h

// let arr = [1,2,3,4,5,5];
// let newarr = arr.filter(function(value){
//     return value >2;
// })
// console.log(newarr);

// reduce method = sum of all elements in array , previoues and current value deta hai

let arr = [40,66,77,88,78,65];
let sum ;
let average = arr.reduce(function(previous,current){
    sum = previous + current;
    return (sum/arr.length);
    
},0);
console.log(average);
