// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [30, 28, 43, 54, 12, 22];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
gameBoard = [
    ["X", "O"],
    ["O", "X"],
    ["X", "O"]
];
var products = [
    { name: "phone", price: 900 },
    { name: "laptop", price: 1500 },
    { name: "watch", price: 700 },
    { name: "tv", price: 3200 },
];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var getTotal = function (products) {
    return products.reduce(function (acc, curr) { return acc + curr.price; }, 0);
};
console.log(getTotal(products));
