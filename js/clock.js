// 시계를 표시할 요소 선택
const clock = document.querySelector("h2#clock");


// 현재 시간을 가져와 시계에 표시하는 함수
function getClock() {
    // 현재 날짜와 시간 정보를 담은 Date 객체 생성
    const date = new Date();
    // 현재 시간과 분을 가져오기
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    // 시계에 현재 시간 표시
    clock.innerText = `${hours}:${minutes} `;
}


// 현재 시간 표시
getClock();
// 1분(60,000밀리초)마다 현재 시간 표시 갱신
setInterval(getClock, 60000);