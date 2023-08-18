// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages : number[] = [30, 28, 43, 54, 12, 22];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

let gameBoard : string[][] = [];
gameBoard = [
    ["X", "O"], 
    ["O", "X"], 
    ["X", "O"]
];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
    name: string;
    price: number;
}

const products : Product[] = [
    {name: "phone", price: 900},
    {name: "laptop", price: 1500},
    {name: "watch", price: 700},
    {name: "tv", price: 3200},
]

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

const getTotal = (products : Product[]) : number => {
    return products.reduce((acc, curr) => acc + curr.price, 0);
}

console.log(getTotal(products));

