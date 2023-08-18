let projectsArray = [];

const project = (projectName) => {
  let toDoArray = [];

  function addToProjects(obj, index) {
    const project = getProject(index);
    project.toDoArray.push(obj);
    return project;
  }

  const addProjectTodo = function (description, index) {
    const myToDo = projectTodo(description, false, "No date");

    addToProjects(myToDo, index);

    return myToDo;
  };

  const getProjectTodoInfo = (todoIndex) => {
    console.log(toDoArray[todoIndex]);
  };

  const removeProjectTodo = (todoIndex) => {
    toDoArray.splice(todoIndex, 1);
    console.log(projectsArray);
  };

  const changeProjectTodoDate = (todoIndex, date) => {
    const todo = toDoArray[todoIndex];
    todo.dueDate = date;
    console.log(projectsArray);
  };

  return {
    projectName,
    toDoArray,
    addProjectTodo,
    getProjectTodoInfo,
    removeProjectTodo,
    changeProjectTodoDate,
  };
};

const projectTodo = (description, checklist, dueDate) => {
  return { description, checklist, dueDate };
};

const addProjects = function (projectName) {
  const myProject = project(projectName);
  projectsArray.push(myProject);
  return myProject;
};

const getProject = (index) => {
  return projectsArray[index];
};

const removeProject = (index) => {
  projectsArray.splice(index, 1);
  console.log(projectsArray);
};
