// array questions 

// for an array find the avearge of all students marks

// let arr = [40,60,70,80,90];
// let sum = arr.reduce((previous,current)=>{
//     return previous+current;
// })
// let average = sum/arr.length;
// console.log(average);


// create an array with the given length and fill with zer0

// let arr = [];
// let n = 5;
// arr.length = n;
// arr.fill(0);
// console.log(arr);


// cteate an array from 1 to n and fill it with 1 to n natural numbers 


// let n = 25;
// let arr = new Array(n).fill(0);
// arr = arr.map((value,index)=>{
//     arr[index] = index + 1;
//     return arr[index];
// })
// console.log(arr);

// create an array 2,3,4,5,67,8

//  let arr = [2,3,4,5,67,8];


 // add 58 at the end and 62 at the begining 
// arr.push(58);
// arr.unshift(62);
// console.log(arr);

// add 78 at the place of 4
// arr.splice(2,1,78);
// console.log(arr);

// check whether 67 is present in the array or not
// arr = arr.includes(67);
// console.log(arr);


// how to find the gi en thing is array or not

// let test = [2] ;
//  console.log(Array.isArray(test));

// check if whether the given string is pelindrom or not

let str = "hello";
let reverse = str.split("").reverse().join("");
if(str === reverse){
    console.log("peliondrom");
}
else{
    console.log("not pelindrom");
}