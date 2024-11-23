'use strict';


let WideScreen = window.innerWidth > 767;
let currentImageIndex = 0;

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
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');


// 랜덤 이미지를 업데이트하는 함수
function updateBackgroundImage(random = true) {
    // 화면의 너비에 따라 적절한 배경 이미지 선택 및 표시
    if (window.innerWidth <= 767) {
        // 모바일 화면
        const mRandomImg = random ? mImages[Math.floor(Math.random() * mImages.length)] : mImages[currentImageIndex];
        mobileImg.src = `img/${mRandomImg}`;
        bgImages.style.display = "none";
        mobileImg.style.display = "block";
    } else {
        // 데스크톱 화면
        const randomImages = random ? images[Math.floor(Math.random() * images.length)] : images[currentImageIndex];
        bgImages.src = `img/${randomImages}`;
        mobileImg.style.display = "none";
        bgImages.style.display = "block";
    }
}

// 다음 이미지로 이동하는 함수
function moveToNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateBackgroundImage(false); // 랜덤이 아닌 순차적으로 이미지 변경
}

// 이전 이미지로 이동하는 함수
function moveToPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateBackgroundImage(false); // 랜덤이 아닌 순차적으로 이미지 변경
}

// 윈도우 크기별 이미지 핸들러
function handleResize() {
    WideScreen = window.innerWidth > 767;
    updateBackgroundImage();
}

// 초기화 함수
function initialize() {
    window.addEventListener('resize', handleResize); // 윈도우 크기 조절 이벤트 리스너를 추가합니다.
    updateBackgroundImage(); // 초기 배경 이미지를 설정합니다.

    // 버튼 이벤트 리스너를 추가합니다.
    document.getElementById('nextButton').addEventListener('click', moveToNextImage);
    document.getElementById('prevButton').addEventListener('click', moveToPrevImage);
}

// 초기화 함수를 호출하여 슬라이더를 활성화합니다.
initialize();