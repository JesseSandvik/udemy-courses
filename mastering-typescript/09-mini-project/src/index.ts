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

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todo-input")! as HTMLInputElement;
const form = document.querySelector("form")!;
const todoList = document.getElementById("todo-list")! as HTMLUListElement;

interface Todo {
    text: string;
    completed: boolean;
}

const todos: Todo[] = [];

function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
}

function createTodo(todo: Todo) {
    const newLI = document.createElement("LI");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(checkbox);
    newLI.append(todo.text);
    todoList?.append(newLI);
}

form.addEventListener("submit", handleSubmit);