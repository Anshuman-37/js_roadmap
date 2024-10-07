function foo() {
    bar = 'This is global!';
}
foo();
console.log(bar); // Outputs: 'This is global!'

// Loop Variables and Closures: When using closures inside loops, developers often run into issues due to lexical scoping.
//     javascript
// Copy code
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 100);
}
// Outputs: 3, 3, 3
// Solution: Use let to create a new binding for each iteration.