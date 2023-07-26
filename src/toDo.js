const toDo = (description, checklist, dueDate) => {
  return { description, checklist, dueDate };
};

let objectsArray = [];

const addToDo = function () {
  //create to do item
  let toDoDescription = document.querySelector(".input-popup").value;

  const myToDo = toDo(toDoDescription, false, "No date");

  objectsArray.push(myToDo);

  return myToDo;
};

export default addToDo;
export { objectsArray };
