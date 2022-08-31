// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore = 6;
highScore = true;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff = ["false", "true"];
var randy = "Beginner";
var Jordan = {
    name: "Jordan Fakeguy",
    age: 524,
    sport: "snowboard",
    level: "Expert"
};
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colors = [{ r: 4, g: 7, b: 155 }, { h: 14, s: 97, l: 81 }];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(who) {
    if (typeof who === "string") {
        console.log("Hello, ".concat(who));
    }
    else {
        who.forEach(function (name) { return console.log("Hello, ".concat(name)); });
    }
}
var names = ["Shawn", "Marcus", "Jamie", "Paul", "Leonard"];
greet("Michael");
greet(names);
