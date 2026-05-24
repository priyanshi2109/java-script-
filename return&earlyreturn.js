// console.log("return and early return in functions");

function sum(v){
    return 12+v;
}
let result = sum(5);
console.log(result); // 17


// early return - where we can return from a function before the end of the function is reached
function earlyReturn(x){
    if(x < 0){
        return "Input is negative";
    }
    return "Input is positive";
}
console.log(earlyReturn(-5)); // "Input is negative"
console.log(earlyReturn(5)); // "Input is positive"
console.log(earlyReturn(0)); // "Input is positive"