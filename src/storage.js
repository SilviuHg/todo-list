import { toDo } from "./toDo";
import { project, projectTodo, addProjects } from "./project";
let storedTodoArray = [];
let storedProjectsArray = [];
//let storedProjectsTodos = [];

// store todo's

// added at ADD/EDIT todos
const setTodo = (array) => {
  localStorage.setItem("todo-array", JSON.stringify(array));
};

// added at ui load
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

// added at ui load
const checkProjects = () => {
  const array = JSON.parse(localStorage.getItem("projects-array"));
  for (let i = 0; i < array.length; i++) {
    const myProject = project(array[i].projectName);
    storedProjectsArray.push(myProject);
  }
  return storedProjectsArray;
};

// added at renderProjects
const checkProjectsTodo = (currentProject) => {
  let storedProjectsTodos = [];
  const array = JSON.parse(localStorage.getItem("projects-array"));
  for (let i = 0; i < array[currentProject].toDoArray.length; i++) {
    const myTodo = projectTodo(
      array[currentProject].toDoArray[i].description,
      array[currentProject].toDoArray[i].checklist,
      array[currentProject].toDoArray[i].dueDate
    );
    storedProjectsTodos.push(myTodo);
  }
  return storedProjectsTodos;
};

const checkProjectsTodoTwo = () => {
  let storedProjectsTodos = [];
  const array = JSON.parse(localStorage.getItem("projects-array"));
  array.forEach((element) => {
    element.toDoArray.forEach((index) => {
      const myTodo = projectTodo(
        index.description,
        index.checklist,
        index.dueDate
      );
      storedProjectsTodos.push(myTodo);
    });
    return storedProjectsTodos;
  });
};

export {
  setTodo,
  checkToDo,
  setProjects,
  checkProjects,
  checkProjectsTodo,
  checkProjectsTodoTwo,
};
