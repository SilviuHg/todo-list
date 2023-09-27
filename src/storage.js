import { toDo } from "./toDo";
import { project, projectTodo } from "./project";
let storedTodoArray = [];
let storedProjectsArray = [];

// store todo's

// added at ADD/EDIT todos
const setTodo = (array) => {
  localStorage.setItem("todo-array", JSON.stringify(array));
};

// get stored toDos from localStorage
const checkToDo = () => {
  const array = JSON.parse(localStorage.getItem("todo-array"));
  for (let i = 0; i < array.length; i++) {
    const myToDo = toDo(
      array[i].description,
      array[i].checklist,
      array[i].dueDate
    );
    storedTodoArray.push(myToDo);
    //console.log(storedTodoArray);
  }
  return storedTodoArray;
};

// store projects

// added at ADD/EDIT projects/projects todos
const setProjects = (array) => {
  localStorage.setItem("projects-array", JSON.stringify(array));
};

// get stored projects from localStorage
const checkProjects = () => {
  const array = JSON.parse(localStorage.getItem("projects-array"));
  for (let i = 0; i < array.length; i++) {
    const myProject = project(array[i].projectName);
    storedProjectsArray.push(myProject);
  }
  return storedProjectsArray;
};

// get all project's toDos from localStorage into one single array
const checkProjectsTodo = () => {
  let storedProjectsTodos = [];
  const array = JSON.parse(localStorage.getItem("projects-array"));
  array.forEach((project) => {
    project.toDoArray.forEach((index) => {
      const myTodo = projectTodo(
        index.description,
        index.checklist,
        index.dueDate,
        project.projectName
      );
      storedProjectsTodos.push(myTodo);
    });
  });
  return storedProjectsTodos;
};

// place each toDo into it's associated project
const placeTodosInProjects = (projectsArray, todosArray) => {
  todosArray.forEach((todoWithProjectId) => {
    const { projectId } = todoWithProjectId;

    // Find the project in projectsArray that matches the projectId
    const project = projectsArray.find(
      (project) => project.projectName === projectId
    );

    if (project) {
      // Directly push the todo into the project's toDoArray
      project.toDoArray.push(todoWithProjectId);
    } else {
      // Handle the case where the project with the given projectId was not found
      console.error(`Project with ID '${projectId}' not found.`);
    }
  });
};

export {
  setTodo,
  checkToDo,
  setProjects,
  checkProjects,
  checkProjectsTodo,
  placeTodosInProjects,
};
