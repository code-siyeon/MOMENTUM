'use strict';

// 로그아웃 버튼을 선택
const logoutBtn = document.querySelector(".menu__logout_btn");

// 로그아웃을 처리하는 함수
function handleLogout() {
    try {
        // 로컬 스토리지에서 사용자 이름을 제거
        localStorage.removeItem(USERNAME_KEY);
        // 초기 상태 설정
        init();

        //메뉴 숨기기
        menuContent.classList.remove('active');
        // 메뉴 오버레이 숨기기
        menuOverlay.classList.remove('active');
    } catch (error) {
        console.error("로그아웃 처리 중 오류 발생:", error);
    }
}

// 로그아웃 버튼에 클릭 이벤트 리스너를 추가
logoutBtn.addEventListener("click", handleLogout);