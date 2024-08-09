const add = document.querySelector(".addbtn");
const check = document.querySelector(".checkbtn");
const edit = document.querySelector(".editbtn");
const remove = document.querySelector(".removebtn");
const inputtask = document.querySelector(".inputtask");
const items = document.querySelector(".items");
const task = document.querySelector(".task");

function emptyTask() {
  inputtask.value = "";
}

function addTask() {
  if (inputtask.value == "") {
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
            <button class="editbtn">
              <span class="material-symbols-outlined" id="edit"> edit </span>
            </button>
            <button class="removebtn">
              <span class="material-symbols-outlined" id="delete">
                delete
              </span>
            </button>
          </div>
          `;
    items.appendChild(li);
  }
  emptyTask();
}

function checkTask() {
  if (check.classList.contains("checkedbtn")) {
    check.classList.remove("checkedbtn");
    check.innerHTML = `
    <span class="material-symbols-outlined" id="check">radio_button_unchecked</span>
    `;
  } else {
    check.classList.add("checkedbtn");
    const checked = document.querySelector(".checkedbtn");
    checked.innerHTML = `
  <span class="material-symbols-outlined" id="checked">task_alt</span>
  `;
  }
}

function editTask() {}

function deleteTask() {}

add.addEventListener("click", function () {
  addTask();
});

check.addEventListener("click", function () {
  checkTask();
});
edit.addEventListener("click", function () {});
remove.addEventListener("click", function () {
  deleteTask();
});
