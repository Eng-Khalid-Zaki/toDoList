let task = document.querySelector(".task");
let add = document.querySelector(".add");
let tasksList = document.querySelector(".tasks-list");
let arrayOfTasks = [];
add.onclick = function () {
  if (task.value !== "") {
    addTaskToArray(task.value);
    task.value = "";
    addTaskToThePage(arrayOfTasks);
  }
};
function addTaskToArray(task) {
  const taskInfo = {
    id: Date.now(),
    title: task,
    completed: false,
  };
  arrayOfTasks.push(taskInfo);
}
function addTaskToThePage(arrayOfTasks) {
  tasksList.innerHTML = "";
  arrayOfTasks.forEach((element) => {
    let taskHolder = document.createElement("div");
    taskHolder.classList.add("holder");
    let taskDiv = document.createElement("div");
    taskDiv.innerText = element.title;
    taskDiv.setAttribute("data-id", element.id);
    taskDiv.classList.add("task-in-list");
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    console.log(taskDiv);
    taskHolder.appendChild(taskDiv);
    taskHolder.appendChild(deleteButton);
    tasksList.appendChild(taskHolder);
  });
}
