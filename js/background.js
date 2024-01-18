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
const mImages = [
    "m0.jpg",
    "m1.jpg",
    "m2.jpg",
    "m3.jpg",
    "m4.jpg",
    "m5.jpg",
    "m6.jpg",
    "m7.jpg",
    "m8.jpg",
    "m9.jpg",
    "m10.jpg",
    "m11.jpg",
]

const mobileImg = document.querySelector("#mobileImage")
const bgImages = document.querySelector("#backgroundImage")


if (window.innerWidth <= 767) {
    // 모바일 화면
    const mRandomImg = mImages[Math.floor(Math.random() * mImages.length)];
    mobileImg.src = `img/${mRandomImg}`;
    bgImages.style.display = "none";
} else {
    // 데스크톱 화면
    const randomImages = images[Math.floor(Math.random() * images.length)];
    bgImages.src = `img/${randomImages}`;
    mobileImg.style.display = "none";
}







