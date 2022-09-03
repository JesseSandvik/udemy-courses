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

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const Ghost: Dog = {
    name: "Ghost",
    age: 4,
    breed: "Great Pyrenees/Golden Retriever",
    bark() {
        return "Boof!";
    }
};

interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog";
};

const Waldo: ServiceDog = {
    name: "Waldo",
    age: 2,
    breed: "Certified Badass",
    bark() {
        return "Ruff Ruff";
    },
    job: "drug sniffer",
};

interface Human {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string;
}

interface Engineer extends Human, Employee {
    level: "junior" | "senior";
    preferredLanguage: string;
}

const pierre: Engineer = {
    id: 123,
    name: "Pierre",
    email: "pierre@france.org",
    level: "senior",
    preferredLanguage: "C#",
}