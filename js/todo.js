const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDo = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDo));
}

function deleteToDo(event) {
    /*
     * event.target -> button
     * event.target.parentElement -> li
     */
    const li = event.target.parentElement;
    toDoList.removeChild(li);
    // or
    // li.remove();

    // HTML 요소의 ID값으로는 Number를 사용할 수 없음
    // 숫자 입력시 자동으로 String으로형변환 된다
    const liId = parseInt(li.id);
    
    /*
     * filter : forEach와 작동법 비슷함
        계산결과가 True인 요소들은 남겨두고, False인 요소는 제외한 새로운 배열을 생성함
     */
    toDo = toDo.filter(e => e.id != liId);
    console.log(JSON.stringify(toDo, null, 3));
    saveToDos();
}

function paintToDo(obj) {
    const li = document.createElement("li");
    li.id = obj.id;
    const span = document.createElement("span");
    span.innerText = obj.text;
    const btn = document.createElement("button");
    btn.innerText = "X";
    // 이벤트 추가해주기
    btn.addEventListener("click", deleteToDo);
    
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    
    const newTodoObj = {
        id: Date.now(),
        text: newTodo
    };

    toDo.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
 
const savedToDos = localStorage.getItem(TODOS_KEY);

// 기존에 저장된 정보가 있다면
if (savedToDos) {
    const parsedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));
    toDo = parsedToDos;
    parsedToDos.forEach(e => paintToDo(e));
}


// filter 예제
// function sexyFilter(idx) {
//     return (idx >= 3);
// }

// const array = [1, 2, 3, 4].filter(sexyFilter);
// console.log(array.join(" "))