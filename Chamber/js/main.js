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