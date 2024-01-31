// 투두리스트를 저장할 배열
let toDos = [];

// 투두 리스트 입력을 위한 form 요소를 선택
const toDoForm = document.getElementById("todo_form");
// form 요소 내의 input 요소를 선택
const toInput = document.querySelector("#todo_form input");
// 투두 리스트를 표시할 리스트 요소를 선택
const toDoList = document.getElementById("todo_list");


// 로컬 스토리지에 저장될 키 값을 변수에 저장
const TODOS_KEY = "todos";


// 로컬 스토리지에 투두리스트를 저장하는 함수
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


// 새로운 투두 리스트를 화면에 그리는 함수
function paintTodo(newTodo) {
    // 'li', 'span', 'button' 요소 생성
    const li = document.createElement("li")
    const span = document.createElement("span")
    const button = document.createElement("button")
    const DELETE = "X";

    // 'li' 요소에 id 설정
    li.id = newTodo.id;

    // 'span' 요소에 텍스트 설정
    span.innerText = newTodo.text;

    // 'button' 요소에 텍스트 설정 및 클릭 이벤트 리스너 추가
    button.innerText = DELETE;
    button.addEventListener("click", deleteTodo)

    // 'li' 요소에 'span' 및 'button' 요소 추가
    li.appendChild(span);
    li.appendChild(button);

    // 할 일 목록에 'li' 요소 추가
    toDoList.appendChild(li);
}


// 투두리스트 폼 제출 이벤트 핸들러
function handleToDoSubmit(event) {
    // 페이지가 새로고침 되는 것을 방지
    event.preventDefault();

    // 사용자가 입력한 투두리스트의 내용을 가져옴
    const newTodo = toInput.value;

    // 투두리스트를 추가한 후, 입력란을 비워줌
    toInput.value = "";

    // 투두리스트 내용과 고유한 ID값을 가진 객체 생성
    const newToDoObj = {
        text: newTodo,  // 투두리스트 내용
        id: Date.now(),  // 고유한 ID 값
    };

    // 투두리스트 객체를 배열에 추가
    toDos.push(newToDoObj);

    // 투두리스트 화면에 표시
    paintTodo(newToDoObj);

    // 투두리스트를 로컬 스토리지에 저장
    saveToDos();
};


// 투두리스트 입력 폼 제출 이벤트 리스너
toDoForm.addEventListener("submit", handleToDoSubmit);

// 로컬 스토리지에서 투두리스트를 불러오는 코드
const storageToDos = localStorage.getItem(TODOS_KEY);


//  저장된 투두리스트가 있다면 화면에 표시
if (storageToDos !== null) {
    // 로컬 스토리지의 투두리스트를 JSON 형태로 파싱
    const parsedTodos = JSON.parse(storageToDos);

    // 파싱된 투두리스트를 전역 투두리스트 배열에 할당
    toDos = parsedTodos;

    // 파싱된 투두리스트의 각 항목을 화면에 표시
    parsedTodos.forEach(paintTodo);
}


// 투두 리스트 삭제하는 함수
function deleteTodo() {
    // 이벤트가 발생한 버튼의 부모 요소(투두 리스트 항목)를 찾아서 화면에서 삭제
    const li = event.target.parentElement;
    li.remove();

    // 삭제된 투두 리스트 항목을 전역 투두리스트 배열에서도 제거
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));

    // 변경된 투두리스트 배열을 로컬 스토리지에 다시 저장
    saveToDos();
}