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