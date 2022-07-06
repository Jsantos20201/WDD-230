const requestURL = 'https://raw.githubusercontent.com/Jsantos20201/WDD-230/master/Chamber/json/data.json';

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject["businesses"];
    
    var table = document.querySelector(".table");
    var cards = document.querySelector(".cards");

    businesses.forEach(displayBusinesses);
    businesses.forEach(displayTable);

    btn1.onclick = function() {
      cards.style.display = "flex";
      table.style.display = "none";
    }

    btn2.onclick = function() {
      cards.style.display = "none";
      table.style.display = "table";
    }




const mediaQuery = window.matchMedia("(max-width: 900px)")
if (mediaQuery.matches) {
  cards.style.display = "none";
  table.style.display = "table";
}

const mediaQuery3 = window.matchMedia("(max-width: 690px)")
if (mediaQuery3.matches) {
  cards.style.display = "flex";
  table.style.display = "none";

}

const mediaQuery2 = window.matchMedia("(max-width: 690px)")
if (mediaQuery2.matches) {
  let addrList = document.querySelectorAll(".add");
  for (let i = 0; i < addrList.length; i++) {
    addrList[i].style.display = "none";
  }

}

const mediaQuery4 = window.matchMedia("(min-width: 700px)")
if (mediaQuery4.matches) {
  let addrList = document.querySelectorAll(".add");
  for (let i = 0; i < addrList.length; i++) {
    addrList[i].style.display = "";
  }
}


  });


  function displayBusinesses(business) {  
    let card = document.createElement("section");
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", business.imageurl);
    img.setAttribute("alt", `${business.name}'s logo`);
    div.appendChild(img);
    card.appendChild(div);

    let h2 = document.createElement("h2");  
    h2.textContent = business.name;
   
    card.appendChild(h2);

    let address = document.createElement("p");
    address.textContent = business.address;
    card.appendChild(address);


    let phone = document.createElement("p");
    phone.textContent = business.phone;
    card.appendChild(phone);

    let website = document.createElement("p");
    website.textContent = business.website;
    website.setAttribute("class", "web");
    card.appendChild(website);


    

    document.querySelector("div.cards").appendChild(card);
  }

  function displayTable(business){
    let list_row = document.createElement("tr");
    let list_td = document.createElement("td");
    list_td.textContent = business.name;

    let td_add = document.createElement("td");
    td_add.textContent = business.address;
    td_add.setAttribute("class", "add");

    let td_cell = document.createElement("td");
    td_cell.textContent = business.phone;

    let td_web = document.createElement("td");
    td_web.textContent = business.website;

    list_row.appendChild(list_td);
    list_row.appendChild(td_web);
    list_row.appendChild(td_add);
    list_row.appendChild(td_cell);

    document.querySelector(".table").appendChild(list_row);

  }