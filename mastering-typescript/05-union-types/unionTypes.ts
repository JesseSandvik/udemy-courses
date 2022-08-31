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