// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
// const ages: Array<number> = [];
var ages = [];
ages.push(4);
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [["string", "string"]];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products) {
    var productsTotal = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        productsTotal += product.price;
    }
    return productsTotal;
}
var products = [];
products.push({ name: "candy", price: 1.50 });
products.push({ name: "apple", price: 0.50 });
products.push({ name: "water", price: 1.25 });
products.push({ name: "bananas", price: 2.25 });
console.log(getTotal(products));
