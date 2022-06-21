const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=100b258478d087b7a4df4424ee2be815";
const getWeather = async () => {
    const response = await fetch(apiURL);
    jsObject = await response.json();
    console.log(jsObject);
    let f = (jsObject.main.temp - 273.15) * 1.8 + 32;
    document.querySelector('#current-temp').textContent = f.toFixed(2);

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;    
  };
getWeather();