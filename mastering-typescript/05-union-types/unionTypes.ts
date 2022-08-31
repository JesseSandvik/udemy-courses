let age: number | string = 21;
age = 24;
age = "15";
// age = false;

type Point = {
    x: number,
    y: number,
};

type Loc = {
    lat: number,
    long: number,
};

let coorinates: Point | Loc = { x: 13, y: 14 };
coorinates = { lat: 44, long: 55 };

function printAge(age: number | string): void {
    console.log(`You are ${age} years old.`);
}

printAge(24);
printAge("65");

function calculatePrice(price: number | string, tax: number): number {
    // return price * tax;
    // price.replace("$", "");
    if (typeof price === "string") {
        price = price.replace("$", "");
        price = parseFloat(price);
    }
    return price * tax;
}

const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const stuff: any[] = [true, 1, "13", "yellow", false, false];

const otherStuff: (number | string)[] = ["1", 3, 4, 5, 7, "4"];

const coords: (Point | Loc)[] = [];
coords.push(coorinates);

let zero: 0 = 0;
// zero = 2;

// let hi: "hi" = "hello";
let hi: "hi" = "hi";

const giveAnswer = (answer: "yes" | "no" | "maybe") => {
    return `the answer is ${answer}.`;
}

giveAnswer("no");
// giveAnswer("gee, I'm not sure");

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
// mood = "Angry";

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

let today: DayOfWeek = "Tuesday";