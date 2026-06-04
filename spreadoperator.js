// spread operator in arrays 
// it is used to copy the array and also to merge two arrays
let arr1 = [1,2,3,4,5,6];
let arr2 = [...arr1]; // copy of arr1
console.log(arr2) // [1,2,3,4,5,6]

let arr3 = [7,8,9];
let arr4 = [...arr1,...arr3]; // merge arr1 and arr3
console.log(arr4) // [1,2,3,4,5,6,7,8,9]