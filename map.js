// map method questions



// add 10 to eacch element in the array

// let arr = [5,10,15]
// let newarr = arr.map(function(val){
//     return val+10;
// })
// console.log(newarr)// [15,20,25]


//["priyanshi", "riya", "anu"] convert in uppercase ["PRIYANSHI", "RIYA", "ANU"]


// const name = ["priyanshi", "riya", "anu"]
// const uppercase =name.map(function(val){
//     return val.toUpperCase();
// })
// console.log(uppercase) // ["PRIYANSHI", "RIYA", "ANU"]

// const name = ["priyanshi", "riya", "anu"]
// const uppercase = name.map((val)=>{
//     return val.toUpperCase();
// })
// console.log(uppercase);



// get the length of each string 


// arrow function
// let arr = ["cat","banana","priyanshi"]
// let length = arr.map((string)=>{
//     return string.length;
// })
// console.log(length);

// normal funnction

// let result = arr.map(function(val){
//     return val.length;
// })
// console.log(result);



// double of every element

// normal function 
// let arr = [1,2,3,4,5,6]
// let doublearr = arr.map(function(val){
//     return val+=val;
// })
// console.log(doublearr)  // 2,4,6,8,10,12

// arrow function
// let doublearr = arr.map((val)=>{
//     return val+=val;
// })
// console.log(doublearr)



// number ko string me convert karo 
// let arr = [1 ,2,3]
// let newarr = arr.map((num)=>{
//     return String(num)
// })
// console.log(newarr)



//  nagative bnao 1,2,3,4 ko -1,-2,-3,-4

// let arr = [1,2,3,4]
// // let newarr = arr.map((val)=>{
// //     return val=(-val);
// // })
// // console.log(newarr)
  
// //or 
// let newarr = arr.map((val)=>{
//     return -val
// })
// // or 
// // let newarr = arr.map(val => -val)
// console.log(newarr)


// currency nikalo

// let arr = [10,20,30]
// let newarr = arr.map(val => String(val) +"₹")
// console.log(newarr)


// let arr = [100, 200, 300];
// let result = arr.map(num => String(num) + "₹");
// console.log(result);




// even numbers ko double or odd ko same rakho

 let arr = [1,2,4,3,5,6,7]
 let newarr = arr.map((val)=>{
    if(val%2==0){
        return val+=val;
    }
    else{
        return val;
    }
 })
 let arr = [1,2,4,3,5,6,7]
 let newarr = arr.map((val)=>{
    if(val%2==0){
        return val+=val;
    }
    else{
        return val;
    }
 })
 //let newarr = arr.map(val => val % 2 === 0 ? val * 2 : val);
 console.log(newarr)