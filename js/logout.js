const logoutBtn = document.querySelector("#logout_btn");

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("username"); // 로컬 스토리지에서 사용자 이름 제거
});


function onLogoutClick() {
    localStorage.removeItem(USERNAME_KEY); // 로컬 스토리지에서 사용자 이름 제거
    greeting.classList.add(HIDDEN_CLASSNAME); // 인삿말 숨김
    clock.classList.add(HIDDEN_CLASSNAME); // 시계숨김
    goalForm.classList.add(HIDDEN_CLASSNAME); // 목표 숨김
    goalList.classList.add(HIDDEN_CLASSNAME); // 목표 리스트 숨김
    quote.classList.add(HIDDEN_CLASSNAME); // quote 숨김
    logoutBtn.classList.add(HIDDEN_CLASSNAME); // 로그아웃 버튼 숨김
    loginInput.value = ""; // 로그인 입력 필드 초기화
    location.reload();
}

logoutBtn.addEventListener("click", onLogoutClick); // 로그아웃 버튼에 이벤트 리스너 추가