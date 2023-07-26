import addToDo from "./toDo";
import iconOne from "./circle-regular.svg";
import iconTwo from "./xmark-solid.svg";
import { objectsArray } from "./toDo";

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

  const addButton = document.createElement("button");
  addButton.classList.add("add-button-popup");
  addButton.textContent = "Add";

  const cancelButton = document.createElement("button");
  cancelButton.classList.add("cancel-button-popup");
  cancelButton.textContent = "Cancel";

  taskPopUpButtons.appendChild(addButton);
  taskPopUpButtons.appendChild(cancelButton);

  content.appendChild(title);
  content.appendChild(tasksList);
  content.appendChild(addTask);
  content.appendChild(taskPopUp);

  const addTaskButton = document.querySelector(".add-button-popup");
  addTaskButton.addEventListener("click", () => {
    toDoLoad();
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
  const taskList = document.querySelector(".tasks-list");

  const divContainer = document.createElement("div");
  divContainer.classList.add("list-container");

  const taskContent = document.createElement("p");
  taskContent.textContent = addToDo().description;
  taskContent.classList.add("task-content");

  const checkIcon = new Image();
  checkIcon.src = iconOne;
  checkIcon.classList.add("fa-circle");

  const date = document.createElement("p");
  date.textContent = addToDo().dueDate;
  date.classList.add("date");

  const deleteIcon = new Image();
  deleteIcon.src = iconTwo;
  deleteIcon.classList.add("fa-xmark");

  divContainer.appendChild(checkIcon);
  divContainer.appendChild(taskContent);
  divContainer.appendChild(date);
  divContainer.appendChild(deleteIcon);

  console.log(addToDo().description);
  console.log(objectsArray);

  taskList.appendChild(divContainer);

  return taskList;
};

export { defaultLoad, todayLoad, weekLoad, toDoLoad };
