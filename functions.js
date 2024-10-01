// This file is for the functions in JavaScript

// You can assign functions to variables in JS kind of knew it that's how you get callbacks
const square = function (number) {
    return number * number;
}
console.log(square(5));

function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}

const cube = function (x) {
    return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]

// You can define a function on the basis of a condition
// let myFunc;
// if (num === 0) {
//     myFunc = function (theObject) {
//         theObject.make = "Toyota";
//     };
// }

// Rest Parameter
// You can change the keys in the object and you will notice that everything is passed to the function as params
let random_obj = {
    x:1,
    y:10,
    z:"String",
}

function rest_test(...params){
    for (let i of params) {
        console.log(i);
    }
}

rest_test(...random_obj);