const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const toDo = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDo));
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
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
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
    // toDo List에 저장하기
    toDo.push(newTodo);
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
 