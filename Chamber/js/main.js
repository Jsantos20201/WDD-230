let date = new Date();
let year = date.getFullYear();
let currentdate = document.lastModified
let copyRight = document.getElementById("year").innerHTML = "&copy" + year + " | Joseph K. Santos | WDD 230 Project | Last Modification: " + currentdate;

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

    if (date.getDay() == 1 || date.getDay() == 2){
        const banner = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
        document.querySelector(".banner").textContent = banner;
        document.querySelector(".banner").style.cssText = "padding: 5px;";
    }
}

hamBurgerandTime();