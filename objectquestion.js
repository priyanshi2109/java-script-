// destructuring in js 

// let obj ={
//     name: " priyanshi",
//     age: 20,
//     city: " jabalpur"
// }

// why we use destructuring in js to access 

// we can access the values of object using destructuring in js

// let {name,age,city}=obj;
// console.log(name);
// console.log(age);

// array destructuring 

// let arr = ["priiyanshi",20,"jabalpur"];
// let [item1,item2,item3]=arr; // we can use any variable name
// console.log(item1);
// console.log(item2);
// console.log(item3);

// some object questions 
// write a function that takes object and return number ofproperties in object

let obj = {
    name: "priyanshi",
    age: 20,
    city: "jabalpur",
    ismarried: false

}

 let countproperties = Object.keys(obj).length;
 console.log(countproperties); // 3