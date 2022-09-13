function printDouble(msg: string): void {
    console.log(msg);
    console.log(msg);
}

printDouble("HELLO");
// TypeScript already knows about the DOM and HTML elements
const btn = document.getElementById("btn");
console.log(btn);

console.log("hello".replaceAll("l", "!"));

btn?.addEventListener("click", function() {
    alert("Clicked!");
});

// non-null assertion operator, only use this in situations where you know for 100% this will not be null

const otherBtn = document.getElementById("btn")!;

otherBtn.addEventListener("click", function() {
    alert("Also clicked!");
});