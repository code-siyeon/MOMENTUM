const logoutBtn = document.querySelector("#logout_btn");

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("username"); // 로컬 스토리지에서 사용자 이름 제거
});

logoutBtn.addEventListener("click", onLogoutClick); // 로그아웃 버튼에 이벤트 리스너 추가


function onLogoutClick() {
    localStorage.removeItem(USERNAME_KEY); // 로컬 스토리지에서 사용자 이름 제거
    greeting.classList.add(HIDDEN_CLASSNAME); // 인삿말 숨김
    clock.classList.add(HIDDEN_CLASSNAME); // 시계숨김
    goalForm.classList.add(HIDDEN_CLASSNAME); // 목표 숨김
    quote.style.display = "none"; // 인용구 숨김
    logoutBtn.classList.add(HIDDEN_CLASSNAME); // 로그아웃 버튼 숨김
    loginForm.classList.remove(HIDDEN_CLASSNAME); // 로그인 폼 표시
    loginInput.classList.remove(HIDDEN_CLASSNAME); // 로그인 인풋 표시
    loginInput.value = ""; // 로그인 입력 필드 초기화
}
