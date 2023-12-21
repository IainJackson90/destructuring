/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [30, 26, 27];
// let jhon = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [jhon, mary, joe] = ages;
console.log(jhon, mary, joe);

// Destructuring objects

let jobs = {
    mike: "desingner",
    jill: "developer",
    alicia: "accountant"
};
let { mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets

let fruits = ["apples", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);
let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegan",
    andrea: "steak"
};
let {brian, anna, ...rest} = favouriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);