// basic structure of objects

// let person ={
//     name: "priyanshi",
//     age:20,
//     city:"jabalpur"
// }
// access value of object

// dot notation 
// console.log(person.name) // pryanshi
// bracket notation
// console.log(person["name"]) // priyanshi


// update value
// person.name = "sakshi"
// console.log(person.name)
// person.age = 21
// console.log(person.age)


// add a new property in object

// person.country="india"
// console.log(person.country)


// delete a property

// delete person.country




// methods  or function in objects

// let person={
//     name: "priyanshi",
//     greet: function(){
//         console.log("helooo")
//     }
// }
// console.log(person.name)
// person.greet()



// nested objsects 

// let person ={
//     name: "priyanshi",
//     address: {
//         city: "jabalpur",
//         area : "damohnakA"
//     }
// }
// console.log(person.address.city)



// looping throuhgh in object 
 
// const student = {
//   name: "Priyanshi",
//   age: 20
// };
// for(let key in student){
//     console.log(key,student[key])
// }

// // usefull objects methods
// console.log(Object.keys(student)) // retruns array of keys 
// console.log(Object.values(student)) // return array of values 
// console.log(Object.entries(student)) // returns array of  keys and values in pairs


// deepclone -- ye nested object ko v independent copy kar leta haii

// let obj1 = {
//   a: 10,
//   b: {
//     c: 20
//   }
// };

// let obj2 = structuredClone(obj1);

// obj2.b.c = 50;
// console.log(obj1.b.c);// 20

// structuredClone() ne obj1 ki completely independent copy banayi.
// obj1.b aur obj2.b alag-alag objects hain.
// Isliye obj2.b.c = 50 karne se obj1 par koi effect nahi pada.



// if we want to exact copy we can also use 

let obj1 = {
  name: "priyanshi",
  age: "20",
  email: "priyanshi@gmail.com",
  address:{
    city:"jabalpur"
  }
}
 
// let obj2 = JSON.parse(JSON.stringify(obj1))
 
let obj2 = structuredClone(obj1)
