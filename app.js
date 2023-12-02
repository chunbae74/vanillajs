const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
    // 페이지가 새로고침되는걸 방지함
    event.preventDefault();
    // input 창 숨기기
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    const userName = loginInput.value;
   
    // localStorage에 userName 저장해주기
    localStorage.setItem(USERNAME_KEY, userName);
   
    paintGreetings(userName);
    
    console.log(userName);
}

function paintGreetings(userName) {
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
/*
* 이름이 저장되어 있는 상황이면 input창 대신 바로 h1 태그 보이게 하기
*/
const savedUserName = localStorage.getItem(USERNAME_KEY);

// 유저 이름이 저장되어 있지 않다면
if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} 
// 유저이름이 저장되어 있다면
else {
    paintGreetings(savedUserName);
}