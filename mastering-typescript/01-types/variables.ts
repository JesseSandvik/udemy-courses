let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
// doesn't work, can't assign string to anumber => movieTitle = 0;

let total: number = 0;
total = 15;
// total = "100";

let gameOver: boolean = false;
gameOver = true;
// gameOver = "true";

let tvShow = "It's Always Sunny In Philadelphia";
// tvShow = false;

let isFunny = true;
isFunny = false;
// isFunny = "true";

// the any type...
let thing: any = "hello";
thing = 0;
thing = false;
thing = {};
thing();
thing.doSomething();

const movies = ["Arrival", "The Thing", "Alien", "Predator"];

let foundMovie: string;

for (let movie of movies) {
    if (movie === "Predator") {
        foundMovie = "Predator";
    }
}

function square(num: number): number {
    return num * num;
}

function greet(person: string) {
    return `Hi, ${person}!`;
}

const doSomething = (person: string, isFunny: boolean) => {
    if (isFunny) {
        return `${person} is funny!`;
    } else {
        return "You're not funny";
    }
}

// square(true);
// square("15");
square(4);

// greet(4);
// greet(false);
greet("Michael");

doSomething("Michael", false);

function greetPerson(person: string = "stranger"): string {
    return `Hi, ${person}!`;
}

greetPerson();
greetPerson("Adam");
// greetPerson(4);

function random(number: number): string | number {
    if (Math.random() < 0.5) {
        return number.toString();
    } else {
        return number;
    }
}

const colors = ["red", "blue", "green"];
// TS knows that each color is of type string, I don't need to tell it anything else.
colors.map(color => color.toUpperCase());

// TS sees and knows this is not supposed to return anything.
function printTwice(message: string): void {
    console.log(message);
    console.log(message);
}

// never type should "never" have a chance to return anything, aka it "never" stops.
function makeError(message: string): never {
    throw new Error(message);
}