"use strict";
// function printDouble(msg: string): void {
//     console.log(msg);
//     console.log(msg);
// }
// printDouble("HELLO");
// // TypeScript already knows about the DOM and HTML elements
// const btn = document.getElementById("btn");
// console.log(btn);
// console.log("hello".replaceAll("l", "!"));
// // btn?.addEventListener("click", function() {
// //     alert("Clicked!");
// // });
// // non-null assertion operator, only use this in situations where you know for 100% this will not be null
// // const otherBtn = document.getElementById("btn")!;
// // otherBtn.addEventListener("click", function() {
// //     alert("Also clicked!");
// // });
// // we can insist that this exists
// const input = document.getElementById("todo-input")! as HTMLInputElement;
// // this doesn't work with React/JSX, less commonly used anyway but same result
// // (<HTMLInputElement>input).value;
// btn?.addEventListener("click", function() {
//     alert(input.value);
//     input.value = "";
// })
const btn = document.getElementById("btn");
const input = document.getElementById("todo-input");
const form = document.querySelector("form");
const todoList = document.getElementById("todo-list");
const todos = getTodosFromLocalStorage();
if (todos.length > 0) {
    todos.forEach(createTodo);
}
function getTodosFromLocalStorage() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function handleSubmit(event) {
    event.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function createTodo(todo) {
    const newLI = document.createElement("LI");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(checkbox);
    newLI.append(todo.text);
    todoList === null || todoList === void 0 ? void 0 : todoList.append(newLI);
}
form.addEventListener("submit", handleSubmit);
