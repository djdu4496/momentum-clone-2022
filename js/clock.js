const clock = document.querySelector('h2#clock');

function getTime() {
  const date = new Date();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`; 
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
  const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);

