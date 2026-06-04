// Destructuring in arrays 
// destructuring meaning break array element into single element and assign it to variable
 let arr = [1,2,3,4,5,]
 
//  let [a,b,c,d,e] = arr; // a=1, b=2, c=3, d=4, e=5
//     console.log(a,b,c,d,e) // 1 2 3 4 5
let [a,b,c, ,e] = arr; // a=1, b=2, c=3, e=5
    console.log(a,b,c,e) // 1 2 3 5



