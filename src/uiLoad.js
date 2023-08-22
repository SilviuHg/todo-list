import addToDo, {
  getTodoDate,
  getTodoDescription,
  removeTodo,
  checkStatus,
  toDoArray,
} from "./toDo";
import addProjects, {
  projectsArray,
  getProjectDescription,
  removeProject,
} from "./project";
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

// todos functionality

const toDoLoad = function () {
  const input = document.querySelector(".input-popup").value;
  addToDo(input);
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

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
    checkIcon.addEventListener("click", () => {
      checkStatus(i);
      renderTodos();
    });

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

    if (toDoArray[i].checklist == false) {
      task.classList.remove("strike");
    } else {
      task.classList.add("strike");
    }

    task.appendChild(checkIcon);
    task.appendChild(taskContent);
    task.appendChild(date);
    task.appendChild(deleteIcon);

    taskList.appendChild(task);

    //return taskList;
  }
};

// project functionality

const createProject = function () {
  const input = document.querySelector(".project-input-popup").value;
  addProjects(input);
  console.log(projectsArray);
};

const renderProjects = function () {
  const projectsList = document.querySelector(".projects-list");

  removeAllChildNodes(projectsList);

  for (let i = 0; i < projectsArray.length; i++) {
    const project = document.createElement("div");
    project.classList.add("project-container");
    project.dataset.indexNumber = projectsArray.indexOf(projectsArray[i]);

    const projectContent = document.createElement("button");
    projectContent.classList.add("project-content");
    projectContent.textContent = getProjectDescription(i);
    projectContent.addEventListener("click", () => {
      // console.log("clicked");
      projectLoad();
    });

    const deleteIcon = new Image();
    deleteIcon.src = iconTwo;
    deleteIcon.classList.add("fa-xmark");
    deleteIcon.addEventListener("click", () => {
      removeProject(i);
      renderProjects();
    });

    project.appendChild(projectContent);
    project.appendChild(deleteIcon);

    projectsList.appendChild(project);
  }
};

const projectLoad = function () {
  const content = document.querySelector(".content");
  content.textContent = "";

  const projectTitle = document.createElement("h1");
  projectTitle.classList.add("title-name");
  projectTitle.textContent = "Inbox";

  const projectTasksList = document.createElement("div");
  projectTasksList.classList.add("tasks-list");

  const addProjectTask = document.createElement("button");
  addProjectTask.classList.add("button-add-task");
  addProjectTask.textContent = "+ Add Task";

  const projectTaskPopUp = document.createElement("div");
  projectTaskPopUp.classList.add("task-popup");

  const projectTaskInput = document.createElement("input");
  projectTaskInput.setAttribute("type", "text");
  projectTaskInput.classList.add("input-popup");
  projectTaskPopUp.appendChild(projectTaskInput);

  const projectTaskPopUpButtons = document.createElement("div");
  projectTaskPopUpButtons.classList.add("task-popup-buttons");
  projectTaskPopUp.appendChild(projectTaskPopUpButtons);

  const addProjectTodoButton = document.createElement("button");
  addProjectTodoButton.classList.add("add-button-popup");
  addProjectTodoButton.textContent = "Add";

  const cancelProjectTodoButton = document.createElement("button");
  cancelProjectTodoButton.classList.add("cancel-button-popup");
  cancelProjectTodoButton.textContent = "Cancel";

  projectTaskPopUpButtons.appendChild(addProjectTodoButton);
  projectTaskPopUpButtons.appendChild(cancelProjectTodoButton);

  content.appendChild(projectTitle);
  content.appendChild(projectTasksList);
  content.appendChild(addProjectTask);
  content.appendChild(projectTaskPopUp);

  addProjectTodoButton.addEventListener("click", () => {
    console.log("added");
  });

  return content;
};

const projectToDoLoad = function () {
  const input = document.querySelector(".input-popup").value;
};

const renderProjectTodos = function () {};

// interface load

const uiLoad = function () {
  defaultLoad();

  const inboxButton = document.querySelector("#button-inbox");
  const todayButton = document.querySelector("#button-today");
  const weekButton = document.querySelector("#button-week");
  const addProjectButton = document.querySelector(".add-project-popup");

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

  addProjectButton.addEventListener("click", () => {
    createProject();
    renderProjects();
  });
};

export { uiLoad };
