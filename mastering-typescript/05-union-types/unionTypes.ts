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