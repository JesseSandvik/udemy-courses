function printName(person: { first: string, last: string }): void {
    console.log(`${person.first} ${person.last}`);
}

printName({first: "Thomas", last: "Jane"});

// let coordinates: { x: number; y: number; } = { x: 32, y: 15 };

// function randomCoordinates(): {x: number, y:number } {
//     return { x: Math.random(), y: Math.random() };
// }

// inline causes an error
// printName({ first: "Mick", last: "Jagger", age: 473 });

const singer = { first: "Mick", last: "Jagger", age: 473 };

// passing an object will not trigger this error (weird)
printName(singer);

// creates a reusable reference to a type "structure"
type Point = {
    x: number;
    y: number;
    // this tells typescript that this property is optional.
    z?: number;
};

let coordinates: Point = { x: 32, y: 15 };

function randomCoordinates(): Point {
    return { x: Math.random(), y: Math.random() };
}

type Song = {
    title: string,
    artist: string,
    numStreams: number,
    credits: { producer: string; writer: string }
};

function calculatePayout(song: Song): number {
    return song.numStreams * .0033;
}

function printSong(song: Song) {
    console.log(song.artist + "-" + song.title);
}

const trackInfo = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North",
    }
}

console.log(calculatePayout(trackInfo));
printSong(trackInfo);

// marks certain properties as read only
type User = {
    readonly id: number,
    username: string,
}

const user: User = {
    id: 12345,
    username: "ggfam"
}

// typescript will throw an error here because we're trying to write to a readonly
// user.id = 12345;

// intersection Types
type Circle = {
    radius: number,
}

type Colorful = {
    color: string,
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
}

type Cat = {
    numLives: number
}

type Dog = {
    breed: string,
}

type CatDog = Cat & Dog & {
    age: number,
}

const abomination: CatDog = {
    numLives: 9,
    breed: "who knows, run away!",
    age: 5,
}