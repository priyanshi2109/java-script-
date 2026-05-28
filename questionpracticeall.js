// use rest parameters to accept any number of scores and return the total

// function getscore(...scores){
//    let total=0;
//     scores.forEach(function(val){
//       total=total+val;
//     })
//     return total;

// }
// console.log(getscore(12,10,23,45,7))  //  output 97



//Q2
// write early return of given function 

// function checkAge(age){
//   if(age<18){
//     console.log("too young ")
//   }
//   else{
//     console.log("allowed")
//   }
// }
// checkAge(23)




// early return pattern 

// function checkAge(age){
//     if(age<18) return "too young";
//     return "allowed ";
// }
// console.log(checkAge(23))

//Q3
// maKE a discountcalculator that take price and percantage and return the discount price

function discountCalculator(price,percentage){
    let discount=price*(percentage/100);
    return price-discount;
}
console.log(discountCalculator(1000,20))  // output 800