const API_KEY = '31d4a0a95b77d3c5d22e3b1784906a77';
const locationIcon = body.querySelector('#weather .weather__icon')

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const cityContainer = document.querySelector('#weather span:first-child');
    const weatherContainer = document.querySelector('#weather span:nth-child(3)');
    const iconImage = document.querySelector('#weather img');
    const descriptionsContainer = document.querySelector('#weather span:nth-child(5)');
    const tempMaxMin = document.querySelector('#weather span:last-child');
    const temperature = data.main.temp;
    const weather = data.weather[0].icon;
    const city = data.name;
    const description = data.weather[0].description;
    locationIcon.classList.remove('hidden');
    weatherContainer.innerText = `${Math.floor(temperature)}°`;
    cityContainer.innerText = `${city}-si`;
    iconImage.src = `http://openweathermap.org/img/wn/${weather}.png`;
    descriptionsContainer.innerText = description;
    tempMaxMin.innerText = `최고:${Math.floor(data.main.temp_max)}° 최저:${Math.floor(data.main.temp_min)}°`
  })
}

function onGeoError(){
  console.log("Can't find a location. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 