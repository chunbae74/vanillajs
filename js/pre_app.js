/*
쿼리설렉터; css선택과 동일하게 작동.
#hello -> id가 hello인 요소 선택
.hello -> class가 hello인 요소 선택
*/
const h1 = document.querySelector(".hello h1")

function handleTitleClick() {
    /*
    classList의 경우, 값을 추가/제거가 가능함
    toggle의 경우, 인자 값이 있는지 없는지 여부와 그에 따른 추가/삭제를
    자동으로 수행해줌.
    */
    h1.classList.toggle("active");
    // const clickedClass = "active";
    // if(h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass)
    // }
}

// function handleMouseEnter() {
//     h1.innerText = "Mouse is Here!";
// }

// function handleMouseLeave() {
//     h1.innerText = "Mouse is gone!";    
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert("copier!");
// }

/*
이벤트 리스너 추가
h1.onclick = function();
또는
h1.addEventListener("click", function);
으로 작성가능

후자의 경우, removeEventListener 작업이 가능하므로 전자보단 후자를 추천
*/
// // h1.onclick = handleTitleClick;
h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);