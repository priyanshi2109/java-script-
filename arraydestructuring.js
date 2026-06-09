// Destructuring in arrays 



// destructuring meaning break array element into single element and assign it to variable

//  let arr = [1,2,3,4,5,]
 
// //  let [a,b,c,d,e] = arr; // a=1, b=2, c=3, d=4, e=5
// //     console.log(a,b,c,d,e) // 1 2 3 4 5
// let [a,b,c, ,e] = arr; // a=1, b=2, c=3, e=5
//     console.log(a,b,c,e) // 1 2 3 5


// QUESTIONS 
// get only first and thirsd color 


// let colors = ["red", "green", "blue"];
// let [a,,c] = colors
// console.log(a)
// console.log(c)


// a me first value aur b me default value 500 store karo.

// let arr = [100];
// let [a,b = 500]= arr
// console.log(a)
// console.log(b)




// predict the output

// let arr = [1, 2, 3, 4];
// let [a, , c] = arr;
// console.log(a, c); //  1,3


// let arr = [10, 20];
// let [a, b, c = 50] = arr;
// console.log(a, b, c);  // 10,20,50



//First value first me aur last value last me destructuring se store karo.

// let arr = [5, 10, 15, 20, 25];
// let [first,...rest] = arr; // first = 5
// let last =rest[rest.length-1] // rest[3]=25
// console.log("first:  ",first)
// console.log("last:  ",last)



// Pehla value first me aur doosra value second me store karo.

// let nums = [5, 10, 15, 20];
// let [first,...rest] = nums;
// let second = rest[0]
// console.log("first: ",first)
// console.log( "second: ",second)



// store only 400 in last

// let arr = [100, 200, 300, 400];
// let last = arr[arr.length-1]
// console.log(" last -",last)


// Pehla element first me aur baaki elements rest array me store karo

let arr = [1, 2, 3, 4, 5];
let[first,...rest] = arr;
console.log("first -",first)
console.log("rest -",rest)
