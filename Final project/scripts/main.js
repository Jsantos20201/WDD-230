function hamBurgerandTime() {
    let hambuttom = document.querySelector(".menu");
    let mainnav = document.querySelector("nav");
    hambuttom.addEventListener("click", () => {mainnav.classList.toggle("active")});

}

hamBurgerandTime();