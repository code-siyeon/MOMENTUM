// 로그아웃 버튼을 선택
const logoutBtn = document.querySelector("#logout_btn");
const moreBtn = document.querySelector("#more_btn");

// 로그아웃을 처리하는 함수
function onLogoutClick() {
    // 로컬 스토리지에서 사용자 이름을 제거
    localStorage.removeItem(USERNAME_KEY);
    showLoginForm()
}

// 로그아웃 버튼에 클릭 이벤트 리스너를 추가
// 클릭하면 onLogoutClick 함수를 실행
logoutBtn.addEventListener("click", onLogoutClick);
moreBtn.addEventListener("click", onLogoutClick);