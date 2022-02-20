const body = document.body;
const clock = body.querySelector('header nav ul .clock');

function getTime() {
  const date = new Date();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`; 
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
  clock.innerText = `${hours}:${minutes}`;
}

getTime();
setInterval(getTime, 1000);

