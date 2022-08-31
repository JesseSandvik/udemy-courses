var age = 21;
age = 24;
age = "15";
var coorinates = { x: 13, y: 14 };
coorinates = { lat: 44, long: 55 };
function printAge(age) {
    console.log("You are ".concat(age, " years old."));
}
printAge(24);
printAge("65");
function calculatePrice(price, tax) {
    // return price * tax;
    // price.replace("$", "");
    if (typeof price === "string") {
        price = price.replace("$", "");
        price = parseFloat(price);
    }
    return price * tax;
}
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var stuff = [true, 1, "13", "yellow", false, false];
var otherStuff = ["1", 3, 4, 5, 7, "4"];
var coords = [];
coords.push(coorinates);
var zero = 0;
// zero = 2;
// let hi: "hi" = "hello";
var hi = "hi";
var giveAnswer = function (answer) {
    return "the answer is ".concat(answer, ".");
};
giveAnswer("no");
// giveAnswer("gee, I'm not sure");
var mood = "Happy";
mood = "Sad";
var today = "Tuesday";
