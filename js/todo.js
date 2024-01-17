// HTML 요소들을 변수에 저장
const toDoForm = document.getElementById("todo_form");
const toInput = document.querySelector("#todo_form input");
const toDoList = document.getElementById("todo_list");

// 로컬 스토리지에 저장될 키 값을 변수에 저장
const TODOS_KEY = "todos";

// 할 일 목록을 저장할 배열
let toDos = [];


// 로컬 스토리지에 할 일 목록을 저장하는 함수
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 할 일을 삭제하는 함수
function deleteTodo() {
    const li = event.target.parentElement;
    li.remove();
    // 삭제한 할 일을 배열에서도 제거
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // 변경된 할 일 목록을 저장
    saveToDos()
}

// 할 일을 화면에 그리는 함수
function paintTodo(newTodo) {
    const li = document.createElement("li")
    li.id = newTodo.id;
    const span = document.createElement("span")
    const button = document.createElement("button")
    span.innerText = newTodo.text;
    button.innerText = "X";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// 할 일 입력 폼 제출 이벤트 핸들러
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toInput.value;
    toInput.value = "";
    const newToDoObj = {
        text: newTodo,
        wid: Date.now(),
    };
    toDos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveToDos();
};

// 할 일 입력 폼 제출 이벤트 리스너
toDoForm.addEventListener("submit", handleToDoSubmit);

// 로컬 스토리지에서 할 일 목록을 불러오는 코드
const storageToDos = localStorage.getItem(TODOS_KEY);

if (storageToDos !== null) {
    const parsedTodos = JSON.parse(storageToDos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
