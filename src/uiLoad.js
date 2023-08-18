import addToDo, {
  getTodoDate,
  getTodoDescription,
  removeTodo,
  toDoArray,
} from "./toDo";
import iconOne from "./circle-regular.svg";
import iconTwo from "./xmark-solid.svg";

const defaultLoad = function () {
  const content = document.querySelector(".content");

  const title = document.createElement("h1");
  title.classList.add("title-name");
  title.textContent = "Inbox";

  const tasksList = document.createElement("div");
  tasksList.classList.add("tasks-list");

  const addTask = document.createElement("button");
  addTask.classList.add("button-add-task");
  addTask.textContent = "+ Add Task";

  const taskPopUp = document.createElement("div");
  taskPopUp.classList.add("task-popup");

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.classList.add("input-popup");
  taskPopUp.appendChild(input);

  const taskPopUpButtons = document.createElement("div");
  taskPopUpButtons.classList.add("task-popup-buttons");
  taskPopUp.appendChild(taskPopUpButtons);

  const addTodoButton = document.createElement("button");
  addTodoButton.classList.add("add-button-popup");
  addTodoButton.textContent = "Add";

  const cancelButton = document.createElement("button");
  cancelButton.classList.add("cancel-button-popup");
  cancelButton.textContent = "Cancel";

  taskPopUpButtons.appendChild(addTodoButton);
  taskPopUpButtons.appendChild(cancelButton);

  content.appendChild(title);
  content.appendChild(tasksList);
  content.appendChild(addTask);
  content.appendChild(taskPopUp);

  addTodoButton.addEventListener("click", () => {
    toDoLoad();
    renderTodos();
  });

  return content;
};

const todayLoad = function () {
  const content = document.querySelector(".content");

  const title = document.createElement("h1");
  title.classList.add("title-name");
  title.textContent = "Today";

  const tasksList = document.createElement("div");
  tasksList.classList.add("tasks-list");

  content.appendChild(title);
  content.appendChild(tasksList);

  return content;
};

const weekLoad = function () {
  const content = document.querySelector(".content");

  const title = document.createElement("h1");
  title.classList.add("title-name");
  title.textContent = "This week";

  const tasksList = document.createElement("div");
  tasksList.classList.add("tasks-list");

  content.appendChild(title);
  content.appendChild(tasksList);

  return content;
};

const toDoLoad = function () {
  const input = document.querySelector(".input-popup").value;
  addToDo(input);
};

const uiLoad = function () {
  defaultLoad();

  const inboxButton = document.querySelector("#button-inbox");
  const todayButton = document.querySelector("#button-today");
  const weekButton = document.querySelector("#button-week");

  //const addTaskButton = document.querySelector(".add-button-popup");

  inboxButton.addEventListener("click", () => {
    document.querySelector(".content").textContent = "";
    defaultLoad();
    renderTodos();
  });

  todayButton.addEventListener("click", () => {
    document.querySelector(".content").textContent = "";
    todayLoad();
  });

  weekButton.addEventListener("click", () => {
    document.querySelector(".content").textContent = "";
    weekLoad();
  });
};

const renderTodos = function () {
  const taskList = document.querySelector(".tasks-list");

  removeAllChildNodes(taskList);

  for (let i = 0; i < toDoArray.length; i++) {
    const task = document.createElement("div");
    task.classList.add("task-container");
    task.dataset.indexNumber = toDoArray.indexOf(toDoArray[i]);

    const taskContent = document.createElement("p");
    taskContent.classList.add("task-content");
    taskContent.textContent = getTodoDescription(i);

    const checkIcon = new Image();
    checkIcon.src = iconOne;
    checkIcon.classList.add("fa-circle");

    const date = document.createElement("p");
    date.classList.add("date");
    date.textContent = getTodoDate(i);

    const deleteIcon = new Image();
    deleteIcon.src = iconTwo;
    deleteIcon.classList.add("fa-xmark");
    deleteIcon.addEventListener("click", () => {
      removeTodo(i);
      renderTodos();
    });

    task.appendChild(checkIcon);
    task.appendChild(taskContent);
    task.appendChild(date);
    task.appendChild(deleteIcon);

    taskList.appendChild(task);

    //return taskList;
  }
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export { uiLoad };
