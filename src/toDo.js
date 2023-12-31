const toDo = (description, checklist, dueDate) => {
  return { description, checklist, dueDate };
};

let toDoArray = [];

// creating a toDo object
const addToDo = function (description) {
  if (description === "" || description === undefined) {
    alert("Task name can't be empty");
  } else {
    const myToDo = toDo(description, false, "No date");

    toDoArray.push(myToDo);
    console.log(toDoArray);

    return myToDo;
  }
};

const getTodoDescription = (index) => {
  return toDoArray[index].description;
};

const getTodoDate = (index) => {
  return toDoArray[index].dueDate;
};

const removeTodo = (index) => {
  toDoArray.splice(index, 1);
  console.log(toDoArray);
};

const changeTodoDate = (index, date) => {
  const todo = toDoArray[index];
  todo.dueDate = date;
  console.log(toDoArray);
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

export default addToDo;
export {
  toDo,
  getTodoDescription,
  getTodoDate,
  removeTodo,
  changeTodoDate,
  checkStatus,
  toDoArray,
};
