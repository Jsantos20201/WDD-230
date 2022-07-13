const requestURL = 'https://raw.githubusercontent.com/Jsantos20201/WDD-230/master/Final%20project/json/temples.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject["temples"];
    
    var cards = document.querySelector(".cards");

    temples.forEach(displayTemples);
    
  });

  displayTemples();

  function displayTemples(temple) {  
    let card = document.createElement("section");
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", temple.imgurl);
    img.setAttribute("alt", `${temple.title}`);
    div.appendChild(img);
    card.appendChild(div);

    let h2 = document.createElement("h2");  
    h2.textContent = temple.title;
   
    card.appendChild(h2);

    let address = document.createElement("p");
    address.textContent = temple.address;
    card.appendChild(address);


    let phone = document.createElement("p");
    phone.textContent = temple.telephone;
    card.appendChild(phone);

    document.querySelector("div.cards").appendChild(card);
  }
