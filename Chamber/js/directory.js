const requestURL = 'https://raw.githubusercontent.com/Jsantos20201/WDD-230/master/Chamber/json/data.json';
 
async function getBusiness(requestURL) {
    const response = await fetch(requestURL);
      if(response.ok) {
        const jsonObject = await response.json();
        console.log(jsonObject);
        const businesses = jsonObject["businesses"];
        businesses.forEach(displayBusiness);
     }
}



getBusiness(requestURL)

 function displayBusiness(business) {
  let card = document.createElement("section");
  let h2 = document.createElement("h2");

  let phone = document.createElement("p");
  let address = document.createElement("p");
  let website = document.createElement("p");
  let img = document.createElement("img");

  h2.textContent = business.name;
  address.textContent = `${business.address}`;
  phone.textContent = `${business.phone}`;
  website.textContent = `${business.website}`;
  img.setAttribute("src", business.imageurl);
  img.setAttribute("alt", `${business.name}`)
  
  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);
  document.querySelector(".cards").appendChild(card);
 }


 function displayTable(prophet) {
  let list_row = document.createElement("tr");
  let td_name = document.createElement("td");
  td_name.textContent = prophet.name + " " + prophet.lastname;

  let td_birthdate = document.createElement("td");
  td_birthdate.textContent = prophet.birthdate;

  list_row.appendChild(td_name);
  list_row.appendChild(td_birthdate);
  document.querySelector("table").appendChild(list_row);
 }