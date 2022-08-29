// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
// const ages: Array<number> = [];
const ages: number[] = [];
ages.push(4);

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
// const gameBoard: string[][] = [["string", "string"]];
const gameBoard: Array<Array<string>> = [["string", "string"], ["string", "string"]];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
    name: string,
    price: number,
}

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

function getTotal(products: Product[]): number {
    let productsTotal: number = 0;
    for (const product of products) {
        productsTotal += product.price;
    }
    return productsTotal;
}

const products: Array<Product> = [];
products.push({ name: "candy", price: 1.50});
products.push({ name: "apple", price: 0.50});
products.push({ name: "water", price: 1.25});
products.push({ name: "bananas", price: 2.25});

console.log(getTotal(products));