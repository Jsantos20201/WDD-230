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

document.querySelector("img").setAttribute("src","https://cdn.vox-cdn.com/thumbor/G_Ts5lMSVPW3grBjSZ924gvyg-s=/0x0:666x444/1200x800/filters:focal(266x140:372x246)/cdn.vox-cdn.com/uploads/chorus_image/image/59491841/Macaca_nigra_self-portrait__rotated_and_cropped_.0.jpg");