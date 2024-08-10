const add = document.querySelector(".addbtn");
const checkbtn = document.querySelector("li .checkbtn");
const removebtn = document.querySelector("li .removebtn");
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
  if (checkbtn.classList.contains("checkedbtn")) {
    checkbtn.classList.remove("checkedbtn");
    checkbtn.innerHTML = `
      <span class="material-symbols-outlined" id="check">radio_button_unchecked</span>
      `;
  } else {
    checkbtn.classList.add("checkedbtn");
    const checkedbtn = document.querySelector(".checkedbtn");
    checkedbtn.innerHTML = `
    <span class="material-symbols-outlined" id="checked">task_alt</span>
    `;
  }
}

function removeTask() {}

add.addEventListener("click", function () {
  addTask();
});

checkbtn.addEventListener("click", function () {
  checkTask();
});

removebtn.addEventListener("click", function () {
  removeTask();
});
