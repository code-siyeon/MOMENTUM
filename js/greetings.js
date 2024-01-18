
// DOM 요소 선택
const loginForm = document.querySelector("#login_form");
const loginSpan = document.querySelector("#login_form > span");
const loginInput = document.querySelector("#login_input");
const loginBtn = document.querySelector("#login_form > input:nth-child(3)")
const greeting = document.querySelector("#greeting");

// 상수 정의
const FLEX__CLASSNAME = "flex";
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


// 로그인 처리 함수
function onLoginSubmit(event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지
    const username = loginInput.value;
    if (username.length > 5) { // 사용자 이름 길이 체크
        alert('입력 가능한 글자수는 최대 5자입니다. \n입력 내용을 수정해주세요.');
        loginInput.value = ""; // 입력 필드를 초기화
        loginInput.focus(); // 입력 필드에 포커스를 다시 맞춤
        return;
    }
    localStorage.setItem(USERNAME_KEY, username); // 로컬 스토리지에 사용자 이름 저장
    paintGreetings(username); // 인삿말 표시
}

// 인삿말 표시 함수
function paintGreetings(username) {
    loginForm.style.display = "none";//로그인 폼 숨김
    quote.classList.add(FLEX__CLASSNAME)
    //인삿말 표시
    greeting.innerText = `Hello, ${username}.`; // 인삿말 글자 설정
    greeting.classList.remove(HIDDEN_CLASSNAME); // 인삿말 표시
    clock.classList.remove(HIDDEN_CLASSNAME); // 시계 표시
    goal_form.classList.remove(HIDDEN_CLASSNAME); // 목표 입력 폼 표시
    goal_list.classList.remove(HIDDEN_CLASSNAME); // 목표 리스트 표시
    quote.classList.remove(HIDDEN_CLASSNAME);//명언 표시
    quote.classList.add(FLEX__CLASSNAME);//명언 플렉스 설정
    logout_btn.classList.remove(HIDDEN_CLASSNAME);// 로그아웃 버튼 표시
}

// 저장된 사용자 이름 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // 사용자 이름이 저장되지 않았으면 로그인 폼 표시
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginInput.classList.remove(HIDDEN_CLASSNAME);
    loginBtn.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    // 저장된 사용자 이름이 있으면 인삿말 표시
    paintGreetings(savedUsername);
}
