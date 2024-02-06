// 배경 이미지 파일 이름 배열
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

// 배경 이미지를 표시할 요소 선택
const mobileImg = document.querySelector("#mobileImage")
const bgImages = document.querySelector("#backgroundImage")

let WideScreen = window.innerWidth > 767;

function updateBackgroundImage() {
    // 화면의 너비에 따라 적절한 배경 이미지 선택 및 표시
    if (window.innerWidth <= 767) {
        // 모바일 화면
        const mRandomImg = mImages[Math.floor(Math.random() * mImages.length)];
        mobileImg.src = `img/${mRandomImg}`;
        bgImages.style.display = "none";
        mobileImg.style.display = "block";
        WideScreen = false;
    } else {
        // 데스크톱 화면
        const randomImages = images[Math.floor(Math.random() * images.length)];
        bgImages.src = `img/${randomImages}`;
        mobileImg.style.display = "none";
        bgImages.style.display = "block";
        WideScreen = true;
    }
}

// 페이지 로드 시점에 이미지 업데이트
updateBackgroundImage();

// 창 크기 변경 시점에 이미지 업데이트
window.addEventListener('resize', updateBackgroundImage);