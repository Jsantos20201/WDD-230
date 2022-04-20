let date = new Date();
console.log(date); 

let year = date.getFullYear();
console.log(year);

document.querySelector('h1').textContent = year; //query selector is to select an element in html file.

document.querySelector("div").innerHTML = "<h2>Hello world!</h2>";


// how to add an element to html file through java script.
let newpara = document.createElement("p");
newpara.textContent = 'This is my paragraph';
document.querySelector("div").appendChild(newpara);