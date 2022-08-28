function printName(person: { first: string, last: string }): void {
    console.log(`${person.first} ${person.last}`);
}

printName({first: "Thomas", last: "Jane"});

// let coordinates: { x: number; y: number; } = { x: 32, y: 15 };

// function randomCoordinates(): {x: number, y:number } {
//     return { x: Math.random(), y: Math.random() };
// }

// inline causes an error
printName({ first: "Mick", last: "Jagger", age: 473 });

const singer = { first: "Mick", last: "Jagger", age: 473 };

// passing an object will not trigger this error (weird)
printName(singer);

// creates a reusable reference to a type "structure"
type Point = {
    x: number;
    y: number;
};

let coordinates: Point = { x: 32, y: 15 };

function randomCoordinates(): Point {
    return { x: Math.random(), y: Math.random() };
}