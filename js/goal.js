// 목표 리스트를 저장할 배열
let goals = [];


// HTML 요소를 선택
const goalForm = document.getElementById("goal_form");
const goInput = document.querySelector("#goal_form input");
const goalList = document.getElementById("goal_list")


// 'div' 요소를 생성하고, 주어진 클래스 이름을 설정하는 함수
function createDivElement(className) {
    const div = document.createElement("div");
    div.className = className;
    return div;
}

// 체크박스를 생성하는 함수
function createCheckboxElement(id) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "customCheckbox" + id;
    checkbox.className = "customCheckbox";
    return checkbox;
}

// 레이블을 생성하는 함수
function createLabelElement(id) {
    const label = document.createElement("label");
    label.htmlFor = id;
    return label;
}

// 텍스트를 담은 'span' 요소를 생성하는 함수
function createSpanElement(text) {
    const span = document.createElement("span");
    span.innerText = text;
    return span;
}

// 삭제 버튼을 생성하고, 클릭 이벤트 리스너를 추가하는 함수
function createButtonElement() {
    const button = document.createElement("button");
    button.className = "customButton";
    button.innerText = "X";
    button.addEventListener("click", deleteGoal);
    return button;
}


// 로컬 스토리지에 저장될 목표의 키
const GOAL_KEY = "goals";


// 로컬 스토리지에 목표 리스트를 저장하는 함수
function saveGoals() {
    localStorage.setItem(GOAL_KEY, JSON.stringify(goals));
}

// 새로운 목표 리스트 항목을 화면에 표시하는 함수
function paintGoal(newGoal) {
    const li = document.createElement("li");
    li.id = newGoal.id;

    const start = createDivElement("start");
    const checkbox = createCheckboxElement(newGoal.id);
    const checkboxLabel = createLabelElement(checkbox.id);
    const span = createSpanElement(newGoal.text);
    const button = createButtonElement();

    start.appendChild(checkbox);
    start.appendChild(checkboxLabel);
    start.appendChild(span);


    li.appendChild(start);
    li.appendChild(button);

    goalList.appendChild(li);
}

// 목표 리스트 항목을 삭제하는 함수
function deleteGoal(event) {
    const li = event.target.parentElement;
    li.remove();
    console.log(typeof li.id);
    goals = goals.filter((goal) => goal.id !== parseInt(li.id));
    saveGoals();
}

// 목표 리스트 폼 제출 이벤트를 처리하는 함수
function handleGoalSubmit() {
    event.preventDefault();
    if (goals.length >= 3) {
        alert(`목표는 최대 3개까지만 설정할 수 있습니다.`);
        goInput.value = "";
        return;
    };

    const newGoal = goInput.value;
    goInput.value = "";

    const newGoalObj = {
        text: newGoal,
        id: Date.now(),
    };

    goals.push(newGoalObj);
    paintGoal(newGoalObj);
    saveGoals();
};


// 목표 리스트 폼 제출 이벤트 리스너 추가
goalForm.addEventListener("submit", handleGoalSubmit);

// 로컬 스토리지에서 저장된 목표 리스트를 불러와 화면에 표시
const storageGoals = localStorage.getItem(GOAL_KEY);
if (storageGoals !== null) {
    const parsedGoals = JSON.parse(storageGoals);
    goals = parsedGoals
    parsedGoals.forEach(paintGoal);
}