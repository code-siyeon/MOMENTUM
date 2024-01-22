// 상수 정의
const FLEX__CLASSNAME = "flex";
const INLINE_BLOCK = "inline-block";
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


// DOM 요소 선택
const loginForm = document.querySelector("#login_form");
const loginSpan = document.querySelector("#login_form > span");
const loginInput = document.querySelector("#login_input");
const loginBtn = document.querySelector("#login_form > input:nth-child(3)")
const greeting = document.querySelector("#greeting");
const goalList = document.getElementById("goal_list");


const before = document.querySelectorAll(".before, .before *") //로그인 전 'before' 클래스 
const after = document.querySelectorAll(".after")  //로그인 후 'after' 클래스
const afterFlex = document.querySelectorAll('.after.flex'); //'after', 'flex' 클래스를 동시에 가진 요소들 선택



// 로그인 처리 함수
function onLoginSubmit(event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지
    const username = loginInput.value;
    if (username.length > 8) { // 사용자 이름 길이 체크
        alert('입력 가능한 글자수는 최대 8자입니다. \n입력 내용을 수정해주세요.');
        loginInput.value = ""; // 입력 필드를 초기화
        loginInput.focus(); // 입력 필드에 포커스를 다시 맞춤
    } else {
        localStorage.setItem(USERNAME_KEY, username); // 로컬 스토리지에 사용자 이름 저장
        paintGreetings(username); // 인삿말 표시
    }
}


// 인삿말 표시 함수
function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}.`; // 인삿말 설정
    updateVisibility(before, true); // 로그인 전 요소들을 숨김
    updateVisibility(after, false); // 로그인 후 요소들을 표시
    greeting.classList.add(INLINE_BLOCK); // 로그인 후 inline-block 적용
    afterFlex.forEach(element => {
        element.classList.add(FLEX__CLASSNAME); // 로그인 후 flex 적용
    });
}

// 요소 목록의 가시성을 갱신하는 함수
function updateVisibility(elements, hidden) {
    elements.forEach(element => {
        element.classList[hidden ? 'add' : 'remove'](HIDDEN_CLASSNAME);
    });
}


// 저장된 사용자 이름 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // 로그인 전 일때 로그인 폼 표시
    updateVisibility(before, false); // 로그인 전 요소들을 표시
    afterFlex.forEach(element => {
        element.classList.remove(FLEX__CLASSNAME); // (로그인 전 일때) 로그인 후의 요소 flex 제거
    });
    loginForm.addEventListener("submit", onLoginSubmit); //// 로그인 폼 제출 이벤트 핸들러 등록

} else {
    // 저장된 사용자 이름이 있으면 인삿말 표시
    paintGreetings(savedUsername);
}

