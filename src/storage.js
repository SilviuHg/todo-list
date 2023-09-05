let storedTodoArray;
let storedProjectsArray;

// store todo's

// adaugat la functiile de ADD/EDIT todos
const setTodo = (array) => {
  localStorage.setItem("todo-array", JSON.stringify(array));
};

// adaugat la randare pagina
const checkToDo = (array) => {
  array = JSON.parse(localStorage.getItem("todo-array"));
  //console.log(array);
};

// store projects

// adaugat la functiile de ADD/EDIT projects/projects todos
const setProjects = (array) => {
  localStorage.setItem("projects-array", JSON.stringify(array));
};

// aduagat la randare pagina
const checkProjects = (array) => {
  if (!localStorage.getItem("projects-array")) {
    return;
  } else {
    array = JSON.parse(localStorage.getItem("projects-array"));
  }
};

export { setTodo, checkToDo, setProjects, checkProjects };
