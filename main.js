const add = document.querySelector(".addbtn");
const inputtask = document.querySelector(".inputtask");
const items = document.querySelector(".items");

function emptyTask() {
  inputtask.value = "";
}

function addTask() {
  if (inputtask.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `
      <div class="task">${inputtask.value}</div>
      <div class="icons">
        <button class="checkbtn">
          <span class="material-symbols-outlined" id="check">
            radio_button_unchecked
          </span>
        </button>
        <button class="removebtn">
          <span class="material-symbols-outlined" id="delete">
            delete
          </span>
        </button>
      </div>
    `;
    items.appendChild(li);

    // Add event listeners for the newly added buttons
    const checkbtn = li.querySelector(".checkbtn");
    const removebtn = li.querySelector(".removebtn");

    checkbtn.addEventListener("click", function () {
      checkTask(checkbtn);
    });

    removebtn.addEventListener("click", function () {
      removeTask(li);
    });
  }
  emptyTask();
}

function checkTask(checkbtn) {
  const icon = checkbtn.querySelector("span");
  const taskElement = checkbtn.closest("li").querySelector(".task");

  if (checkbtn.classList.contains("checkedbtn")) {
    checkbtn.classList.remove("checkedbtn");
    icon.innerHTML = "radio_button_unchecked";
    taskElement.style.color = "";
    taskElement.style.textDecoration = "";
  } else {
    checkbtn.classList.add("checkedbtn");
    icon.innerHTML = "task_alt";
    taskElement.style.color = "lightgray";
    taskElement.style.textDecoration = "line-through";
  }
}

function removeTask(taskElement) {
  taskElement.remove();
}

add.addEventListener("click", function () {
  addTask();
});
