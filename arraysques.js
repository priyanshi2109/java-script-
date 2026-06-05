// print the array of fruits and also print the second fruit 

// let fruits = [ "apple","banana","graps"]
// console.log(fruitjs[1]) // [ "apple","banana","graps"]

// add a new fruit at the begining and end of the array


// fruits.push("orange") // add at the end
// fruits.unshift("mango") // add at the begining
// console.log(fruits) // [ "mango","apple","banana","graps","orange"]

// replace banana with strawberry
 
// fruits[2] = "strawberry"
// console.log(fruits) // [ "mango","apple","strawberry","graps","orange" ]


//insert a new two fruits mango and kiwi at index 1 

// fruits.splice(1,0,"mango","kiwi") // add at index 1 // 1,0, means no element will be removed form the index 1 but two elements will be added
// console.log(fruits) // [ "mango","mango","kiwi","apple","strawberry","graps","orange" ]


// extract the value of 2 middle values from the array

// let arr = [1,2,3,4,5,6]
//  let newarr = arr.slice(2,4) // [3,4] // 2 is the starting index and 4 is the ending index but the element at index 4 will not be included in the result
//     console.log(newarr) // [3,4]
//     console.log(arr) // [1,2,3,4,5,6] // original array is not modified


// use map to square the value of each element in the array
let arr = [1,2,3,4,5]
let squaredArr = arr.map(function(val){
    return val*val;
})
console.log(squaredArr) // [1,4,9,16,25]

