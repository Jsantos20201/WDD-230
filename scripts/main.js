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

document.querySelector("img").classList.add("add_border");


//slection

//if clause

if (year == 2022) {
    console.log("current year")
}


//functions

function addyear () {
    console.log("it ran");
}

addyear(year);

//repetition (loops)

const myarray = ["monke", "bruh", "yikes!"];

function makelist(item) {
    document.querySelector("div").innerHTML += "<li>" + item + "</li>";
}

myarray.foreach(makelist);


//this is what you need for homework in week 1

//lastModified property that works with document.

let currentdate = document.lastModified;

document.querySelector("span").textContent = currentdate;
