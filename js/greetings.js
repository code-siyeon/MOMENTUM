
// DOM 요소 선택
const loginForm = document.querySelector("#login_form");
const loginSpan = document.querySelector("#login_form > span");
const loginInput = document.querySelector("#login_input");
const loginBtn = document.querySelector("#login_form > input:nth-child(3)")
const greeting = document.querySelector("#greeting");


const before = document.querySelectorAll(".before, .before *") //로그인 전
const after = document.querySelectorAll(".after")  //로그인 후



// 상수 정의
const FLEX__CLASSNAME = "flex";
const INLINE_BLOCK = "inline-block";
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


// 로그인 처리 함수
function onLoginSubmit(event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지
    const username = loginInput.value;
    if (username.length > 8) { // 사용자 이름 길이 체크
        alert('입력 가능한 글자수는 최대 8자입니다. \n입력 내용을 수정해주세요.');
        loginInput.value = ""; // 입력 필드를 초기화
        loginInput.focus(); // 입력 필드에 포커스를 다시 맞춤
        return;
    }
    localStorage.setItem(USERNAME_KEY, username); // 로컬 스토리지에 사용자 이름 저장
    paintGreetings(username); // 인삿말 표시
}

// 인삿말 표시 함수
function paintGreetings(username) {
    before.forEach(element => {
        element.classList.add(HIDDEN_CLASSNAME);
        greeting.classList.remove(INLINE_BLOCK);
        goalList.classList.remove(FLEX__CLASSNAME);
    });
    greeting.innerText = `Hello, ${username}.`; // 인삿말 설정
    after.forEach(element => {
        // after 클래스를 가진 모든 요소에서 HIDDEN_CLASSNAME 클래스를 제거
        element.classList.remove(HIDDEN_CLASSNAME);
    });
    greeting.classList.add(INLINE_BLOCK);
    goalList.classList.add(FLEX__CLASSNAME);
    quote.classList.add(FLEX__CLASSNAME);// quote에 플렉스 적용
}

// 저장된 사용자 이름 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // 사용자 이름이 저장되지 않았으면 로그인 폼 표시
    before.forEach(element => {
        element.classList.remove(HIDDEN_CLASSNAME);
    });
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    // 저장된 사용자 이름이 있으면 인삿말 표시
    paintGreetings(savedUsername);
}
