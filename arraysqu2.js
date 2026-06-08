// find the smallest element

// let arr = [13,4,1,18,3]
// let min = arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<min){
//         min =arr[i];
//      }

// }
// console.log(min)


// find the maximum element of the array

// let arr = [12,4,55,66]
// let max = arr[0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(max);


// count the even number in array

// let arr = [1,2,3,4,5,6,6,8,10]
// let counteven = 0;
// for(let i =0 ; i<arr.length ; i++){
//     if(arr[i]%2===0){
//     counteven++
//     }
// }
// console.log(counteven)


// count the odd number o0f element in array

// let arr = [1,2,3,4,5,6,6,8,10]
// let countodd = 0;
// for(let i =0 ; i<arr.length ; i++){
//     if(arr[i]%2!==0){
//     countodd++
//     }
// }
// console.log(countodd)


// reverse an array without using reverse()

// let arr = [1,2,3,4,5]
// for(i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);

// }


// find the secondlargest number in array

// let arr = [1,4,6,8,10,12,15]
// let max = arr[0]
// let secondlarge = -Infinity
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max ){
//         secondlarge = max;
//         max=arr[i]
//     }
//      else if(arr[i]>secondlarge){
//         secondlarge = arr[i]
//     }
// }

// console.log(max)
// console.log(secondlarge)



// check if array is sorted or not 


// let arr = [1,2,3,4,5]
// let sorted = true ;
// for(let i =0;i<=arr.length-1;i++){
//    if(arr[i]>arr[i]+1){
//     sorted = false ;
//     break;
//    }
// }
// console.log(sorted)



// check if number is in the array or not

// let arr = [10,20,30,40,50]
// let target = 30
// let found=false
// for(let i =0;i<arr.length;i++){
//     if(arr[i]===target){
//       found = true;
//     }
// }
// console.log(found)


// count the duplicate element 

// let arr = [1,2,2,3,3,3,4,4,5,6,6,6,6,6,7,7,7]
// let countduplicate = 0;
// for(let i=0; i<arr.length-1;i++){
//    if(arr[i]===arr[i+1] && arr[i] !==arr[i-1]){
//       countduplicate++;
//    }
// }
// console.log(countduplicate)


// print the difference bw smallest and largest number

// let arr = [1,2,3,7,8,16,7]
// let max =arr[0];
// let min = arr[0];
// for(let i =0;i<arr.length;i++){
//    if(arr[i]>max){
//       max=arr[i];
//    }
//    if(arr[i]<min){
//       min=arr[i]
//    }
// }
// console.log(max-min)


// array me kitni bar element aya hai

// let arr = [1,2,3,4,5,6,2,2];
// let target = 2;
// let count =0;
// for(let i =0;i<arr.length;i++){
//    if(arr[i]===target){
//       count++;
//    }
// }
// console.log(count) // 3

let arr = [10, 20, 10, 30, 10, 40];
let target = 10;
let count = 0;
for(let i =0;i<arr.length;i++){
   if(arr[i]===target){
      count++;
   }
}
console.log(count)  // 3