"use strict";
function printDouble(msg) {
    console.log(msg);
    console.log(msg);
}
printDouble("HELLO");
// TypeScript already knows about the DOM and HTML elements
const btn = document.querySelector('button');
console.log(btn);
