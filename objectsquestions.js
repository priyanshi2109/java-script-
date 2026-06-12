// objects questions 


// create an object for a student with name age and isenrolled

// let student ={
//     name:"priyanshi",
//     age: 20,
//     isenrolled: "yes"
// }
// for(let key in student){
//     console.log(key,student[key])
// }



// access the value of first name from this object


// const user ={
//     "first name" : "priyanshi"
// }
// console.log(user["first name"])


//print the value of lattitde

//  let locations = {
//     city : "jabalpur",
//     coordinates:{
//         lat: 15,
//         long: 20
//     }
// }
// console.log(locations.coordinates.lat)

// // distructure city and lat from object

// let {lat} = locations.coordinates;
// let {city} = locations;
// console.log(lat,city)


// distructure the key "first nam" as variable first name 

// const user ={
//     "first-name" : "priyanshi"
// }
// // let {"first-name": firstName} = user;
// let firstName = user["first-name"]
// console.log(firstName)


// print name age and city 

// const person = {
//   name: "Priyanshi",
//   age: 20,
//   city: "Bhopal"
// };
// console.log(person.name)
// console.log(person.age)
// console.log(person.city)



// distructuring object and make variable of name age and course

// let student = {
//   name: "Rahul",
//   age: 21,
//   course: "BCA"
// };

// let {age} = student;
// let {name} = student;
// let {course} = student;
// console.log(age,name,course)


// print city and state

// const student = {
//   name: "Priya",
//   address: {
//     city: "Bhopal",
//     state: "MP"
//   }
// };
// console.log(student.address.city)
// console.log(student.address.state)


// use for in loop and print the keys and values

// const person = {
//   name: "Priyanshi",
//   age: 20,
//   city: "Bhopal"
// };
// for(let key in person){
//     console.log(key,person[key])
// }


// const user = {
//   name: "Rahul"
// };

// user.name = "Aman";

// console.log(user.name);// Aman



// const obj = {
//   a: 10,
//   b: 20
// };

// console.log(obj.a);
// console.log(obj["b"]);// 10 , 20


// add a new key in object

// const car = {
//   brand: "Toyota"
// };
// console.log(car.brand)  // Toyota
// car.color="blue"
// console.log(car.color)  // blue 


// print the keys

//  const student = {
//   name: "Priya",
//   age: 19,
//   course: "BCA"
// };
// for(let keys in student ){
//     console.log(keys)
// }

// // print the values
// for(let keys in student ){
//     console.log(student[keys])
// }


// const user = {
//   name: "Amit",
//   age: 25
// };

// const {name} = user;

// console.log(name);// Amit



// const obj1 = {
//   age: 20
// };

// const obj2 = obj1;

// obj2.age = 50;

// console.log(obj1.age);// 50


// const user = {
//   name: "Priya"
// };

// delete user.name;

// console.log(user); // {}   (empty object)


// const obj = {
//   a: 10
// };

// console.log(obj.b); // undefined


// check if "age " exist in user or not 
// const user = {
//   name: "Priya",
//   age: 20
// };
// console.log("age" in user)  // true


// count the keys in object

const user = {
  name: "Priya",
  age: 20,
  city: "Bhopal",
  course: "BCA"
};
console.log(Object.keys(user).length)   // 4