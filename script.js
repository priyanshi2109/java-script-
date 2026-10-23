// operators in js 
// let a =5 ;
// let b = 4;
// console.log(a + b); // addition
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// let x = 89;
// if(x>=100 && x<=999){
//     console.log("3 digit number");
// }
// else {
//     console.log("not 3 digit number");
// }

// for(let i=0;i>=10;i++){
//     console.log(i)
// }

// function greeting(){
//     console.log("heyy this is priyanshi ")
// }
// greeting();


// function add(a,b){
//   const sum = a+b;
//   console.log(sum);
// }
// add(5,6);

// rest  operator 

// function sum(...num){
//     console.log(num);
// }
// sum(1,2,3);
// sum(1,2,3,4,5);
// sum(1,2)

// function expression 

// const sum = function(a,b){
//     return a+b;
// }
// console.log(sum(5,6));

// arrow function

// const sum = ()=>{
//     console.log("this is arrow function");

// }
// sum();

// const sum = (a,b)=> a+b;
// console.log(sum(5,6));

// const square = (a)=> a*a ;
// console.log(square(3));


//questions practice arrow function 

// sum of two numbers and return their sum

// const sum = (a,b)=> a+b;
// console.log(sum(5,6));

// take a name and return example = hello rahul !

// const greet = () => "hello rahuul" ;
// console.log(greet());

// check if a number is even

// const iseven = (number)=>{
//     if(number%2==0){
//         return"even number";
//     }
//     else{
//         return "odd number";
//     }
// }
// console.log(iseven(4));
// console.log(iseven(5));



// thereare or 4 types of creating functions in js

// no parameters and return nothing

// function greet (){
//     console.log("hello priyanshi");

// }
// greet();


// without parameter and return something 

// function greet(){
//     return " heyy priyanshi ";

// }
//  console.log(greet());

// return nothing with parametr

// function greet(name){
//     console.log("hello"+ name);
// }
// greet("priyanshi");


// default parametr 

// function greet(name = "priyanshi"){
//     console.log( "heyy"+ " "+name);
// }
// greet();


 // function expression 

 // a function expression is a function that is assingeg it to a variable 


//  let sum = function(a,b){
//     return a+b;
//  }
//  console.log(sum(5,6));

//  arrow function

// let sum = ()=>{
//     console.log("this is arrow function");
// }
// sum();

// anonymous function

// setTimeout(function(){
//     console.log("this is anonymous function");
// },3000);

// make an arrow function that take price and discount percentage and return the discounted price


// let discountedPrice = (price,discount)=>{
//     let calculate = price - (price*(discount/100));
//     return calculate;
// }
// let result = discountedPrice(1000,10);
// console.log(result);


// string in js 

// template literals 

// let name = "priyanshi";
// let message = `hello , ${name} how are you?`;
// console.log(message);

// let a = 20;
// let b = 30;
//  console.log(`the sum of ${a} and ${b} is ${a+b}`);


// template lioterals can span multiple lines 

// let message = `hello priyanshi 
// you are learning js 
// this is your template literals!`;

// console.log(message);

// let str = new String("priyanshi");
// console.log(str);


// let str = "Priyanshi";
//  let str2 = str.toUpperCase();
//  let str3 = str.toLowerCase();
// console.log( str ,str2,str3);

// let str = " this is priyanshi "
// for (let ch of str){
//     console.log(ch);
// }
// for (let key in str){
//     console.log(key);
// }
// let check = str.includes("girll");
// console.log(check); // true 

// array in js 

// let fullname = prompt("enter your name");
// let username = `@${fullname.trim().replaceAll(" ", "")}_${fullname.length}`;
// console.log(username);

// let firstname = "priyanshi";
// let middlename = "kumari ";
// let lastname = "vishwakarma ";
// let fullname = firstname + " " + middlename + " " + lastname;
// console.log(fullname);
// let fullname2 = firstname.concat(" ", middlename, " ", lastname);
// console.log(fullname2);

// let str = " i am a girll";
// let check = str.indexOf("l");
// console.log(check); // 11

// question 1 
// let str = prompt("enter your name");
// let username = `@${str.trim().replaceAll(" ", "")}_${str.length}`;
// console.log(username);

// question 2 

let str = prompt(" enter any string ");
let ch = prompt("enter a character to check");
let count = 0;
for(let val of str){
    if(val.toLowerCase() == ch.toLowerCase()){
        count++;
    }
}
console.log(count);