const requestURL = 'https://raw.githubusercontent.com/Jsantos20201/WDD-230/master/Final%20project/json/temples.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject["temples"];
    
    var cards = document.querySelector(".cards");

    temples.forEach(displayTemples);
    temples.forEach(listenForLikes);
    
  });

  function displayTemples(temple) {  
    let card = document.createElement("section");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let like = document.createElement("div");
    
    img.setAttribute("src", temple.imgurl);
    img.setAttribute("alt", `${temple.title}`);
    like.classList.add("like-yes", "like-no");
    div.appendChild(img);
    card.appendChild(div);
    card.appendChild(like);

    let h2 = document.createElement("h2");  
    h2.textContent = temple.title;
    card.appendChild(h2);

    let h2_2 = document.createElement("h3");
    h2_2.textContent = "Address";
    card.appendChild(h2_2);
    
    let address = document.createElement("p");
    address.textContent = temple.address;
    card.appendChild(address);

    let phone_title = document.createElement("h3");
    phone_title.textContent = "Phone Number";
    card.appendChild(phone_title);

    let phone = document.createElement("p");
    phone.textContent = temple.telephone;
    card.appendChild(phone);

   let service_title = document.createElement("h3");
   service_title.textContent = "Services";
   card.appendChild(service_title);

    let service = document.createElement("p");
    service.textContent = temple.services;
    card.appendChild(service);

    let history_title = document.createElement("h3");
    history_title.textContent = "History";
    card.appendChild(history_title);

    let history = document.createElement("p");
    history.textContent = temple.history;
    card.appendChild(history);

    let ordin_title = document.createElement("h3");
    ordin_title.textContent = "Ordinace Schedules"
    card.appendChild(ordin_title);
    let ordin_des = document.createElement("p");
    ordin_des.textContent = "Click on this link to set up an appointment at this temple."
    card.appendChild(ordin_des);
    let ordin = document.createElement("p");
    ordin.textContent = temple.Ordinance;
    card.appendChild(ordin);

    let closure_title = document.createElement("h3");
    closure_title.textContent = "Closure Schedule";
    card.appendChild(closure_title);
    let closure = document.createElement("p");
    closure.textContent = temple.closure;
    card.appendChild(closure);

    document.querySelector("div.cards").appendChild(card);
  }

  const listenForLikes = () => {
    const likes = document.querySelectorAll(".like");
    likes.forEach(like => {
     like.addEventListener("click", (event) => {
       event.target.classList.toggle("like-no");
       event.target.classList.toggle("like-yes");
       if (event.target.classList.contains("like-yes")) {
         console.log("Saving Favorite...");
         getFaveData(event.target);
       } else {
         console.log("Removing Favorite...");
         getFaveData(event.target);
       }
     })
    })
  } 