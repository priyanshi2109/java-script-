// console.log("hello world");

//continue and break statement in javascript

// continue statement is used to skip the current iteraration of the loop and move to the next 

// example of continue statement -- print number from 1 to 200 skip 32

// for(let i=1;i<41;i++){
//     if(i=32){
//         continue;
//     }
//     console.log(i);
// }


// break statement is used to exit the loop when a certain condition is met

// example of break statement -- print number from 1 to 40 but stop when you reach 32

for(let i=1;i<41;i++){
    if(i===32){
        break;
    }
    console.log(i);
}