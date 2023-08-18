const toDo = (description, checklist, dueDate) => {
  return { description, checklist, dueDate };
};

let toDoArray = [];

// creating a toDo object
const addToDo = function (description) {
  const myToDo = toDo(description, false, "No date");

  toDoArray.push(myToDo);
  console.log(toDoArray);

  return myToDo;
};

const getTodoDescription = (index) => {
  //console.log(toDoArray[index].description);

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

export default addToDo;
export {
  getTodoDescription,
  getTodoDate,
  removeTodo,
  changeTodoDate,
  toDoArray,
};
