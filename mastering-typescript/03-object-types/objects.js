function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "Jane" });
// let coordinates: { x: number; y: number; } = { x: 32, y: 15 };
// function randomCoordinates(): {x: number, y:number } {
//     return { x: Math.random(), y: Math.random() };
// }
// inline causes an error
// printName({ first: "Mick", last: "Jagger", age: 473 });
var singer = { first: "Mick", last: "Jagger", age: 473 };
// passing an object will not trigger this error (weird)
printName(singer);
var coordinates = { x: 32, y: 15 };
function randomCoordinates() {
    return { x: Math.random(), y: Math.random() };
}
function calculatePayout(song) {
    return song.numStreams * .0033;
}
function printSong(song) {
    console.log(song.artist + "-" + song.title);
}
var trackInfo = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
console.log(calculatePayout(trackInfo));
printSong(trackInfo);
