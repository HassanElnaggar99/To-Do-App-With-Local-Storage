/*
  BOM [Browser Object Model]
  BOM Challenge
*/
let tasks = [];

let inp = document.querySelector(".input");
let btn = document.querySelector(".add");
let results = document.querySelector(".tasks");

if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.forEach(function(item) {
    buildTask(item.title);
  });
}

btn.onclick = function() {
  if (inp.value === "") return;
  buildTask(inp.value);

  let task = {id: Date.now(), title: inp.value};
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  inp.value = "";
  inp.focus();
};

function buildTask(title) {
  let newDiv = document.createElement("div");
  newDiv.textContent = title;
  newDiv.className = "task";
  results.append(newDiv);

  let del = document.createElement("button");
  del.textContent = "Delete";
  del.className = "deleteBtn";
  newDiv.append(del);
  del.onclick = function() {
    newDiv.remove();
    // Remove from tasks[]
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].title === title) {
        tasks.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
