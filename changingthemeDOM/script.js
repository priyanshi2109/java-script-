// attribute manipulation


// let div = document.querySelector("#box")
// console.log(div.attributes.id.value)

// css manipulation

// let div = document.querySelector('div');
// div.style.backgroundColor = 'red';

// create a website with theme changing functionality 

let button = document.querySelector("button");
let body= document.querySelector('body');
let div = document.querySelector("div")
// let theme = 0;
// button.addEventListener("click",()=>{
// if(theme===0){
//     body.style.backgroundColor= "black";
//     theme = 1;
// }
// else{
//     body.style.backgroundColor= "white";
//     theme = 0;

// }
// })
//create a website with theme changing functionality  through css

button.addEventListener("click",()=>{
    if(div.className==="light"){
        body.style.backgroundColor= "black";
        div.className = "dark";
    }
    else{
        body.style.backgroundColor= "white";
        div.className = "light";
    }
})

// tgrough toggle
// button.addEventListener("click",()=>{
//    body.classList.toggle("dark")

// })
