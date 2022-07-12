function main() {
    //Hamburger menu
    let hambuttom = document.querySelector(".menu");
    let mainnav = document.querySelector("nav");
    hambuttom.addEventListener("click", () => {mainnav.classList.toggle("active")});

    //tells date
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById("year").innerHTML = "&copy" + year + " | Joseph K. Santos | Idaho";
    

    //This part of the function is the updated date.
    let currentdate = document.lastModified;
    document.write(currentdate);
    document.getElementById("updated-date").innerHTML = "Last Updated: " + currentdate;
}

main();