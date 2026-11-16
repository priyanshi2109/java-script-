// how to change html using js 

// let h1 = document.querySelector("h1")
// console.log(h1)
// h1.innerHTML = "changed html"
// let p = document.querySelector("p")
// console.log(p)
// p.innerHTML = "changed paragraph"


// how to change css using js 

// let h1 = document.querySelector("h1");
// let p = document.querySelector("p");
// h1.style.color = "blue"
// p.style.color = "white"
// h1.style.backgroundColor = "lightpink"
// p.style.backgroundColor = "lightblue"

// event listener 

// h1.addEventListener(event,function)


// h1.addEventListener("click",function(){
//     console.log("clicked")
//     h1.style.color = "red"
//     h1.style.backgroundColor = "lightgreen"
// })


// a project of recatangle which expand and shrink on click on 

let box = document.querySelector("#container")
let onbutton = document.querySelector("#btn")
let offbutton = document.querySelector("#btn2")
onbutton.addEventListener("click",function(){
    box.style.backgroundColor = "yellow"
    box.style.scale = "1"
})
offbutton.addEventListener("click",function(){
    box.style.scale= "0.3"
})
