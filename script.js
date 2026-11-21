//  selection of elements by tag name

// let a = document.getElementsByTagName("h1")
// console.log(a)

// manupilating the html


// let h1 = document.querySelector("h1");
// console.log(h1.innerText);
// heyy this is priyanshi 

// console.log(h1.textContent)

// heyy
//          this is
         
// priyanshi

// set in html codes

// h1.innerText = " i am a student of 3rd year cse branch"
// console.log(h1.innerText);



// insertion in html


let div = document.querySelector('div');
// first we have have to create an elemnt
let p = document.createElement('p')
div.append(p) // this is a text insertion or element insertion method in any div of html
p.innerText = "im priyanshi"
div.prepend(p)