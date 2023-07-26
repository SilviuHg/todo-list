import "./style.css";
import { defaultLoad, todayLoad, weekLoad, toDoLoad } from "./uiLoad";
//import addToDo from "./toDo";

defaultLoad();

const inboxButton = document.querySelector("#button-inbox");
const todayButton = document.querySelector("#button-today");
const weekButton = document.querySelector("#button-week");
//const addTaskButton = document.querySelector(".add-button-popup");

inboxButton.addEventListener("click", () => {
  document.querySelector(".content").textContent = "";
  defaultLoad();
});

todayButton.addEventListener("click", () => {
  document.querySelector(".content").textContent = "";
  todayLoad();
});

weekButton.addEventListener("click", () => {
  document.querySelector(".content").textContent = "";
  weekLoad();
});

//addTaskButton.addEventListener("click", () => {
// toDoLoad();
// const div = document.querySelector(".tasks-list"); // mutat in uiLoad si scris acl interface load
// const taskContent = document.createElement("p"); // aici doar functii butoane interfata
//toDoLoad.taskContent.textContent = addToDo().description;
// taskContent.classList.add("task-content");

//  div.appendChild(taskContent);
// console.log(toDoLoad().div);
//});
