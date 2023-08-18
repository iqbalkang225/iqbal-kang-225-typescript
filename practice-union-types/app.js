// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore;
highScore = 30;
highScore = true;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff = [1, 2, 3, 4];
stuff = ["aa", "bb", "cc"];
var level = "Expert";
var colors = [{ r: 255, g: 0, b: 255 }];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
var greet = function (input) {
    if (typeof input === "string") {
        console.log("Hello, " + input);
        return;
    }
    input.forEach(function (name) { return console.log("Hello, " + name); });
};
var names = ["bala", "jeeto", "abhi", "prince"];
greet("elton");
greet(names);
