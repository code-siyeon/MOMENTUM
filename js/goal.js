const goalForm = document.getElementById("goal_form");
const goInput = document.querySelector("#goal_form input");
const goalAfter = document.getElementById("goal_after")
const goalList = document.getElementById("goal_list");



const GOAL_KEY = "goals";
const HIDDEN_CLASSNAME = "hidden";

let goals = [];


function saveGoals() {
    localStorage.setItem(GOAL_KEY, JSON.stringify(goals));
}

function deleteGoal(event) {
    const li = event.target.parentElement;
    li.remove();
    console.log(typeof li.id);
    goals = goals.filter((goal) => goal.id !== parseInt(li.id));
    saveGoals();
}


function paintGoal(newGoal) {
    const li = document.createElement("li")
    li.id = newGoal.id;
    const start = document.createElement("div");
    start.className = "start";
    const span = document.createElement("span")

    const button = document.createElement("button")
    button.className = "customButton";

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.id = "customCheckbox" + newGoal.id;
    checkbox.className = "customCheckbox";

    const checkboxLabel = document.createElement("label");
    checkboxLabel.htmlFor = checkbox.id;


    span.innerText = newGoal.text;
    button.innerText = "X";
    button.addEventListener("click", deleteGoal)


    goalList.appendChild(li);
    li.appendChild(start);
    start.appendChild(checkbox)
    start.appendChild(checkboxLabel);
    start.appendChild(span);
    li.appendChild(button);


}





function handleGoalSubmit() {
    event.preventDefault();
    if (goals.length >= 4) {
        alert('목표는 최대 4개까지만 설정할 수 있습니다.');
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


goalForm.addEventListener("submit", handleGoalSubmit);

const storageGoals = localStorage.getItem(GOAL_KEY);



if (storageGoals !== null) {//입력했을때
    const parsedGoals = JSON.parse(storageGoals);
    goals = parsedGoals
    parsedGoals.forEach(paintGoal);
}
