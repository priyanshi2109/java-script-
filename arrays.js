// arrays in js

// create an array
let arr=[1,2,3,4,5]


// access element of array
// console.log(arr[0])  // output 1

// change element of an array
// arr[0]=10;

// array methods

// push method - add element at the end of the array

// arr.push(6);
// console.log(arr)  // output [10,2,3,4,5,6]




// shift method - remove element at the begining of the array

// arr.shift()
// console.log(arr)  // output [2,3,4,5]



// unshift method - add elemnt at the begining of the array 

// arr.unshift(0);
// console.log(arr)  // output [0,1,2,3,4,5]



// splice method - remove the element of the middle of the array

// arr.splice(2,1)  // 2 is the index and 1 is the number of element to be removed
// console.log(arr)  // output [1,2,4,5]
// arr.splice(2,0,3)  // 2 is the index and 0 is the number of element to be removed and 3 is the element to be added
// console.log(arr)  // output [1,2,3,4,5]
// arr.splice(2,2)  // 2 is the index and 2 is the number of element to be removed (matlab 2 and 3 will be removed)
// console.log(arr)  // output [1,2,5]




// slice method - it will return a new array from the given index to the end of the array

// let newarr=arr.slice(2)  // 2 is the index from which the new array will be created
// console.log(newarr)  // output [3,4,5] 
// //  example -agar index 2 hai toh index 0 or index 1 ki value new array me nahi ayagi 



// reverse method - it will reverse the array 
// arr.reverse();
// console.log(arr)  // output [5,4,3,2,1]


// sort method - it will sort the array in ascending  and descending order

// arr.sort(function(a,b){
//     // return b-a;  // for descending order
//     return a-b;  // for ascending order
// })



// forEach loop in array- it will excecute a function for each element of the array

// arr.forEach(function(element){
//     console.log(element)  // output 1 2 3 4 5
// })


// arr.forEach(function(element){
//     console.log(element*2) // output 2 4 6 8 10
// })

//map in arrays - it will return a new array and return the value of the funnction for each element of the array

// let arr =[1,2,3,4,5]
// let newarr=arr.map(function(value){
//     // return value*2;  // output [2,4,6,8,10]
//     return 12;
// })
// console.log(newarr)  // output [12,12,12,12,12]


// filter in array - it will return a new array and return the value of the function for each element if the condition is true

// let arr =[1,2,3,4,5]
// let newarr = arr.filter(function(value){
//     // return value%2==0;  // output [2,4]  or 
//     if(value>4)
//         return value;  
//     })
// console.log(newarr) // output [5]


// reduce in array - it will return a single value and return the value of the function for each element of the array

// let arr = [1,2,3,4,5]
// let sum = arr.reduce(function(acc,val){
//     return acc+val
// },0) // 0 is the initial value of acc
// console.log(sum)  // output 15



// find in array - it will find the element by condition and return 

// in array ------

// let value = arr.find(function(val){
//     return val===1;
// })
// console.log(value)  // output 1

// in object -----

// let arr = [ {id: 1, name:"priyanshi"},
//             {id: 2, name:"ankita"},
//             {id: 3, name:"sakshi"},
//             {id: 4, name:"anshul"},
// ]
// let value = arr.find(function(val){
//   return val.id===3;
// })
// console.log(value)  // output {id: 3, name:"sakshi"}




// some in array - it will return true if the condition is true for the one element 

// let arr = [1,4,55,66,78]
// let value = arr.some(function(val){
//     return val>50;
// })
// console.log(value)  // output true




// every in array - it will return true if the condition is true for all the element

let every = arr.every(function(val){
    return val>0;
})
console.log(every)  // output true