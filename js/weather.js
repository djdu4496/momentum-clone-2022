const API_KEY = '31d4a0a95b77d3c5d22e3b1784906a77';

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const weatherContainer = document.querySelector('#weather span:first-child');
    const cityContainer = document.querySelector('#weather span:last-child');
    const temperature = data.main.temp;
    const weather = data.weather[0].main;
    const city = data.name;
    weatherContainer.innerText = `${temperature}, ${weather}`;
    cityContainer.innerText = city;
  })
}

function onGeoError(){
  console.log("Can't find a location. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 