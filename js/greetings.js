const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");






const HIDDEN_CLASSNAMES = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAMES);
    const username = loginInput.value;
    if (username.length >= 6) {
        alert('입력 가능한 글자수는 최대 5자입니다. \n입력 내용을 수정해주세요.');
        return;
    };
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);

    clock.classList.remove(HIDDEN_CLASSNAMES);
    goal_form.classList.remove(HIDDEN_CLASSNAMES);
    quotes.classList.remove(HIDDEN_CLASSNAMES);
}


function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAMES);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAMES);
    loginForm.addEventListener("submit", onLoginSubmit);
    goal_form.classList.add(HIDDEN_CLASSNAMES);
    paintQuote()

    // show the form
} else {
    clock.classList.remove(HIDDEN_CLASSNAMES);
    goal_form.classList.remove(HIDDEN_CLASSNAMES);
    greeting.classList.remove(HIDDEN_CLASSNAMES);
    paintGreetings(savedUsername);
    paintQuote()
    // show the greetings 
}