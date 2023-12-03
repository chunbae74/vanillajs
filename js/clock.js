const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();

/*
* setInterval -> n초후 첫 시작, 이후 n초마다 반복
* setTimeout -> n초 후 시작. 한 번만 실행됨
*/
setInterval(getClock, 1000);
