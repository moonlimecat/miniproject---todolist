const addBtn = document.querySelector(".addBtn");
const inputTask = document.querySelector(".inputTask");
const items = document.querySelector(".items");

function emptyTask() {
  inputTask.value = "";
}

function addTask() {
  if (inputTask.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `
      <div class="task">${inputTask.value}</div>
      <div class="icons">
        <button class="checkBtn">
          <span class="material-symbols-outlined" id="check">
            radio_button_unchecked
          </span>
        </button>
        <button class="removeBtn">
          <span class="material-symbols-outlined" id="delete">
            delete
          </span>
        </button>
      </div>
    `;
    items.appendChild(li);

    const checkBtn = li.querySelector(".checkBtn");
    const removeBtn = li.querySelector(".removeBtn");

    checkBtn.addEventListener("click", function () {
      checkTask(checkBtn);
    });

    removeBtn.addEventListener("click", function () {
      removeTask(li);
    });
  }
  emptyTask();
  inputTask.focus();
}

function checkTask(checkBtn) {
  const icon = checkBtn.querySelector("#check");
  const taskElement = checkBtn.closest("li").querySelector(".task");

  if (checkBtn.classList.contains("checkedBtn")) {
    checkBtn.classList.remove("checkedBtn");
    icon.innerHTML = "radio_button_unchecked";
    taskElement.style.color = "";
    taskElement.style.textDecoration = "";
  } else {
    checkBtn.classList.add("checkedBtn");
    icon.innerHTML = "task_alt";
    taskElement.style.color = "lightgray";
    taskElement.style.textDecoration = "line-through";
  }
}

function removeTask(taskElement) {
  taskElement.remove();
}

addBtn.addEventListener("click", function () {
  addTask();
});
