let date = new Date();
let year = date.getFullYear();
let currentdate = document.lastModified
let copyRight = document.getElementById("year").innerHTML = "&copy" + year + " | Joseph K. Santos | WDD 230 Project | Last Modification: " + currentdate;

let email_date = document.querySelector("#date");
email_date.value = date;


function hamBurgerandTime() {
    let hambuttom = document.querySelector(".menu");
    let mainnav = document.querySelector("nav");
    hambuttom.addEventListener("click", () => {mainnav.classList.toggle("active")});


    const datafield = document.querySelector(".date");
    const date = new Date();
    console.log(date);
    const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(date);
    document.write(fulldate);
    document.querySelector("span").innerHTML = fulldate;
}

hamBurgerandTime();