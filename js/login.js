// 상수 정의
const FLEX__CLASSNAME = "flex";
const INLINE_BLOCK = "inline-block";
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//  요소 선택
const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_input");
const greeting = document.querySelector("#greeting");

// 로그인 전/후 요소 선택
const logBefore = document.querySelectorAll(".logBefore, .logBefore *");
const logAfter = document.querySelectorAll(".logAfter, logAfter *");

// 로그인 후 flex를 가진 요소 선택
const afterFlex = document.querySelectorAll(".logAfter.flex, .logAfter .flex");


// 요소 목록의 가시성을 갱신하는 함수
function updateHidden(elements, hidden) {
    elements.forEach(element => {
        if (hidden) { 
            element.classList.add(HIDDEN_CLASSNAME);
        } else {
            element.classList.remove(HIDDEN_CLASSNAME);
        }
    });
}

// 로그인 처리 함수
function onLoginSubmit(event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지
    const username = loginInput.value;

    // 사용자 이름 길이 체크
    if (username.length > 8) {
        alert('입력 가능한 글자수는 최대 8자입니다. \n입력 내용을 수정해주세요.');
        loginInput.value = ""; // 입력 필드를 초기화
        loginInput.focus(); // 입력 필드에 포커스를 다시 맞춤
    } else {
        localStorage.setItem(USERNAME_KEY, username); // 로컬 스토리지에 사용자 이름 저장
        showGreeting(username); // 인삿말 표시
    }
}

// 로그인 전 함수
function showLoginForm() {
    // 로그인 전 요소들을 표시
    updateHidden(logBefore, false);
    // 로그인 후 요소들을 숨김
    updateHidden(logAfter, true);
    // 로그인 후 flex를 가진 요소들에서 flex 제거
    afterFlex.forEach(element => {
        element.classList.remove(FLEX__CLASSNAME);
    });

    // 입력 필드를 초기화
    loginInput.value = "";

    // 로그인 폼 제출 이벤트 핸들러 등록
    loginForm.addEventListener("submit", onLoginSubmit);
}

// 로그인 후 함수
function showGreeting(username) {
    greeting.innerText = `Hello, ${username}.`; // 인삿말 설정
    updateHidden(logBefore, true); // 로그인 전 요소들을 숨김
    updateHidden(logAfter, false); // 로그인 후 요소들을 표시
    greeting.classList.add(INLINE_BLOCK); // 로그인 후 inline-block 적용
    afterFlex.forEach(element => {
        element.classList.add(FLEX__CLASSNAME); // 로그인 후 flex 적용
    });
}


// 저장된 사용자 이름 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // 로그인 전 상태 처리
    showLoginForm();
} else {
    // 로그인 후 상태 처리
    showGreeting(savedUsername);
}