const toDoForm = document.getElementById("todo_form");
const toInput = document.querySelector("#todo_form input");
const toDoList = document.getElementById("todo_list");
const TODOS_KEY = "todos";

let toDos = [];


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo() {
    const li = event.target.parentElement;
    li.remove();
    console.log(typeof li.id);
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos()
}

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

toDoForm.addEventListener("submit", handleToDoSubmit);

const storageToDos = localStorage.getItem(TODOS_KEY);

if (storageToDos !== null) {
    const parsedTodos = JSON.parse(storageToDos);
    toDos = parsedTodos
    parsedTodos.forEach(paintTodo);
}