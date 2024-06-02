//All Elements

const inputField = document.querySelector(".input-field textarea"),
todoLists = document.querySelector(".todoLists"),
pendingNum = document.querySelector(".pending-num"),
clearButton = document.querySelector(".clear-button");

// Deleting felan onlar eklenecek

function allTasks(){
    let tasks = document.querySelectorAll(".pending");
    pendingNum.textContent = tasks.length === 0 ? "yok" : tasks.length;

    let allLists = document.querySelectorAll(".list");
    if(allLists.length > 0){
        todoLists.style.marginTop = "1.25rem";
        clearButton.style.pointerEvents = "auto";
        return
    }
    todoLists.style.marginTop = "0";
    clearButton.style.pointerEvents = "none";
}

//Metin Alani Degerleri

inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim();  // On Arka bosluk nanay!
    
    if(e.key === "Enter" && inputVal.length > 0){
        let liTag = ` <li class="list pending" onclick="handleStatus(this)">
            <input type="checkbox">
            <span class="task">${inputVal}</span>
            <i class="fa-solid fa-trash" onclick="deleteTask(this)"></i>
        </li>`;

        todoLists.insertAdjacentHTML("beforeend", liTag);
        inputField.value = ""; // Input remove tarafi
        allTasks();
    }
});

//Check Boxs Area

function handleStatus(e){
    const checkbox = e.querySelector("input");  //Checkbox Get
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}

//Delete iconu islevi

function deleteTask(e){
    e.parentElement.remove(); // Get Element Remove
    allTasks();
}

//Kafani Bosalt Area

clearButton.addEventListener("click", () => {
    todoLists.innerHTML = "";
    allTasks();
});