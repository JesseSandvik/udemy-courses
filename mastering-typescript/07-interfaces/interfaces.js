var pt = { x: 123, y: 90 };
var Thomas = { id: 37, first: "Thomas", last: "Hardy", nickname: "Tom Hardy", sayHi: function () { return "Hello!"; } };
Thomas.first = "Mike";
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (discount) {
        var newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return newPrice;
    }
};
console.log(shoes.applyDiscount(0.4));
