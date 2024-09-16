// Compare data with ==,===, Object.is()

let x = 10
let y = "10"

console.log("Double equals", x==y);
console.log("Triple equals", x===y);
console.log("Object is ", Object.is(x,y));

// This should be pretty self-explanatory

/* comparison for zero */

console.log(0 == ''); // == only values
console.log(0 === ''); // typeof 0 !== typeof ''
console.log(NaN === NaN); // This will turn out as false
console.log(Object.is(0, '')) // false
console.log(Object. is(null, undefined)) // false
console.log(Object. is(NaN, NaN)) // true

// Can't compare objects as they will always give false when ever compared with each other
// As you are trying to compare the reference think of it as comparing two pointers.