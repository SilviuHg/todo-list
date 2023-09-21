let projectsArray = [];

const project = (projectName) => {
  let toDoArray = [];

  function addToProjects(obj, index) {
    const project = getProject(index);
    project.toDoArray.push(obj);
    return project;
  }

  const addProjectTodo = function (description, index) {
    const myToDo = projectTodo(
      description,
      false,
      "No date",
      getProjectDescription(index)
    );

    addToProjects(myToDo, index);

    return myToDo;
  };

  const getProjectTodoDescription = (todoIndex) => {
    //console.log(toDoArray[todoIndex]);
    return toDoArray[todoIndex].description;
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

  const getProjectTodoDate = (index) => {
    return toDoArray[index].dueDate;
  };

  const checkStatus = (index) => {
    if (toDoArray[index].checklist == false) {
      toDoArray[index].checklist = true;
      console.log(toDoArray);
    } else {
      toDoArray[index].checklist = false;
      console.log(toDoArray);
    }
  };

  return {
    projectName,
    toDoArray,
    addProjectTodo,
    getProjectTodoDescription,
    removeProjectTodo,
    changeProjectTodoDate,
    checkStatus,
    getProjectTodoDate,
    //   getProjectIndex,
  };
};

const projectTodo = (description, checklist, dueDate, projectId) => {
  return { description, checklist, dueDate, projectId };
};

const addProjects = function (projectName) {
  const myProject = project(projectName);
  projectsArray.push(myProject);
  return myProject;
};

const getProjectDescription = (index) => {
  return projectsArray[index].projectName;
};

const getProject = (index) => {
  return projectsArray[index];
};

const removeProject = (index) => {
  projectsArray.splice(index, 1);
  console.log(projectsArray);
};

export default addProjects;
export {
  projectsArray,
  project,
  projectTodo,
  addProjects,
  getProjectDescription,
  removeProject,
};
