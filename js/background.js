const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
]

const randomImages = images[Math.floor(Math.random() * images.length)];

const bgBorder = document.createElement("div")
const bgImages = document.createElement("img")
const bgOverlay = document.createElement("div")

bgBorder.id = "backgroundBorder";
bgOverlay.id = "backgroundOverlay";

bgImages.id = "backgroundImage";
bgImages.src = `img/${randomImages}`;

const body = document.querySelector("body")
body.appendChild(bgBorder);
bgBorder.appendChild(bgImages);
bgBorder.appendChild(bgOverlay);