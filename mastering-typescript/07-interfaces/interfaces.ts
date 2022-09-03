interface Point {
    x: number;
    y: number;
}

const pt: Point = { x: 123, y: 90 };

interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    // both of these work for declaring a method.
    // sayHi: () => string;
    sayHi(): string;
}

const Thomas: Person = { id: 37, first: "Thomas", last: "Hardy", nickname: "Tom Hardy", sayHi: () => { return "Hello!";} };

Thomas.first = "Mike";
// Thomas.id = 11;

interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number; 
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(discount: number) {
        const newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return newPrice;
    }
};

console.log(shoes.applyDiscount(0.4));