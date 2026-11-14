// object in js 

// let car = {
//     name :"kia",
//     // speed : 200,
//     // color : "white",
//     // stop: ()=>{
//     //     console.log(" stopt the car..")
//     // },
//     start : function(){
//         console.log(`start the car ${this.name}`) // this is used to access the object properties itself
//     }
// }
// // car.average = 20;
// // console.log(car);
// // console.log(car.name);
// // car.stop();
// car.start();


// object methods 

let obj = {
    name : " priyanshi",
    age: 20,
     getname : function(){
        console.log(`my name is ${this.name} and my age is ${this.age}`)
     }
}
let keys = Object.keys(obj);  // object.keys method kisi object ke keys ko array me conevert kar deta hai
console.log(keys);
let values = Object.values(obj); // object.values method kisi object ke values ko array me conevert kar deta hai
console.log(values);
for(let key in obj){ 
    console.log(key) 
}
for(let key in obj){
    console.log(obj[key])
}

let entries = Object.entries(obj); // object.entries method kisi object ke key-value pairs ko array me conevert kar deta hai
console.log(entries);


