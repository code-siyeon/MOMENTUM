'use strict';

// 상수 정의
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 요소 선택
const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_input");
const greetingUser = document.querySelector("#greeting_user");

// 로그인 전/후 요소 선택
const logBefore = document.querySelectorAll(".logBefore, .logBefore *");
const logAfter = document.querySelectorAll(".logAfter, .logAfter *");


// 요소의 가시성을 변경하는 함수
function toggleVisibility(elements, isHidden) {
    elements.forEach(element => element.classList.toggle(HIDDEN_CLASSNAME, isHidden));
}

// 로그인 처리 함수
function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value.trim();

    if (username.length > 8) {
        alert('입력 가능한 글자수는 최대 8자입니다. \n입력 내용을 수정해주세요.');
        loginInput.value = "";
        loginInput.focus();
    } else {
        localStorage.setItem(USERNAME_KEY, username);
        updateUI(username);
    }
}

// UI 업데이트 함수
function updateUI(username) {
    if (username) { //로그인 후
        greetingUser.innerText = `${username}.`;
        toggleVisibility(logBefore, true);
        toggleVisibility(logAfter, false);
    } else { // 로그인 전
        toggleVisibility(logBefore, false);
        toggleVisibility(logAfter, true);
        loginInput.value = "";
    }
}

// 초기 상태 설정
function init() {
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    updateUI(savedUsername);
    loginForm.addEventListener("submit", onLoginSubmit);
}

init();
