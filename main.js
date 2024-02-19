/*
  BOM [Browser Object Model]
  BOM Challenge
*/
let tasks = [];

let inp = document.querySelector(".input");
let btn = document.querySelector(".add");
let results = document.querySelector(".tasks");

if (localStorage.getItem("tasks")) {
  tasks = localStorage.getItem("tasks").split(",");
  tasks.forEach(buildTask);
}

btn.onclick = function() {
  if (inp.value === "") return;
  buildTask(inp.value);

  tasks.push(inp.value);
  localStorage.setItem("tasks", tasks);
  inp.value = "";
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
    tasks.splice(tasks.indexOf(title), 1);
    localStorage.setItem("tasks", tasks);
  }
}
