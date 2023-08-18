// store todo's

// adaugat la functiile de ADD/EDIT todos
const setTodo = () => {
  localStorage.setItem("todo-array", JSON.stringify(toDoArray));
};

// adaugat la randare pagina
const checkToDo = () => {
  if (!localStorage.getItem("todo-array")) {
    return;
  } else {
    toDoArray = JSON.parse(localStorage.getItem("todo-array"));
  }
};

// store projects

// adaugat la functiile de ADD/EDIT projects/projects todos
const setProjects = () => {
  localStorage.setItem("projects-array", JSON.stringify(projectsArray));
};

// aduagat la randare pagina
const checkProjects = () => {
  if (!localStorage.getItem("projects-array")) {
    return;
  } else {
    projectsArray = JSON.parse(localStorage.getItem("projects-array"));
  }
};
