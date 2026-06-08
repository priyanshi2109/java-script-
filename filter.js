// questions of filter method

// use filter method to get element which are greatter than 10


// let arr = [ 1,2,5,10,11,12,15]
// let newarr = arr.filter(function(val){
//     if(val>10) return true;
// })
// console.log(newarr)  // 11 ,12 ,15

// by arrow function


//  let arr = [1,2,6,10,11,12,15]
//  let newarr = arr.filter((val)=>{
//     if(val>10) return true;
//  })
//     console.log(newarr) // 11,12,15




// find the elements which are even 


// let arr = [1,2,3,4,5,6,7,8]
// let evennum = arr.filter((val) =>{
//     if(val%2==0){
//         return true;
//     }
// })
// console.log(evennum)


// let evennum = arr.filter(function(val){
//     if(val%2==0){
//      return true ;
//     }
// })
// console.log(evennum)


// remove the nagative numbers 

//  let arr = [-2,4,-1,8,-5]
//  let nagativenum = arr.filter(function(val){
//     if(val<0){
//         return true;
//     }
//  })
//  console.log(nagativenum)

// remove the string which string length is greater than 4 

// let arr = ["cat","elephant","dog","tiger"]
// let newarr = arr.filter(function(val){
//     if(val.length>4){
//         return true ;
//     }
// })
// console.log(newarr)

// remove the strings which are starts from vowels

let arr =["apple","banana","orange","grape","umbrella"]
let vowels = arr.filter((function(word){
        return word[0] !== "a" &&
           word[0] !== "e" &&
           word[0] !== "i" &&
           word[0] !== "o" &&
           word[0] !== "u";
}))
console.log(vowels)


