// Control Flow using If and Else
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
    childsAllowance = 10;
} else {
    childsAllowance = 5;
}

// Comma Operator
let x = 1;
x = (x++, x);
console.log(x);// Expected output: 2
x = (2, 3);
console.log(x); // Expected output: 3

let a, b, c;
a = b = 3, c = 4; // Returns 4
console.log(a); // 3 (left-most)

let x1, y, z;
x1 = (y = 5, z = 6); // Returns 6
console.log(x1); // 6 (right-most)

let sum = 0;
const squares = [1, 2, 3, 4, 5].map((x) => ((sum += x), x * x));
console.log(squares); // [1, 4, 9, 16, 25]
console.log(sum); // 15

// Comma Operator discards reference binding.
const obj = {
    value: "obj",
    method() {
        console.log(this.value);
    },
};
obj.method(); // "obj"
(obj.method)(); // "obj" (the grouping operator still returns the reference)
(0, obj.method)(); // undefined (the comma operator returns a new value)
// Why Does this Become undefined?
// Method Reference Lost: By using the comma operator, you separated the function from its object.
// No Object Context: When you call the function, there's no object associated with it.
// Default this: In this situation, this defaults to undefined (or the global object in non-strict mode).



// Description
