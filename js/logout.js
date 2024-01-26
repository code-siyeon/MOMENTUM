const logoutBtn = document.querySelector("#logout_btn");

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("username"); // 로컬 스토리지에서 사용자 이름 제거
});


function onLogoutClick() {
    localStorage.removeItem(USERNAME_KEY); // 로컬 스토리지에서 사용자 이름 제거
    updateHidden(logAfter, true); // 로그인 후 요소들을 숨김
    afterFlex.forEach(element => {
        element.classList.remove(FLEX__CLASSNAME); // (로그인 전 일때) 로그인 후의 요소 flex 제거
    });
    updateHidden(logBefore, false); // 로그인 전 요소들을 표시 
    loginInput.value = ""; // 로그인 입력 필드 초기화
}

logoutBtn.addEventListener("click", onLogoutClick); // 로그아웃 버튼에 이벤트 리스너 추가