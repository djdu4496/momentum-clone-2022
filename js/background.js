const images = [ "1.jpg", "2.jpg", "3.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${randomImage}`;
bgImage.classList.add('background-image');
document.body.appendChild(bgImage);