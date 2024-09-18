
const array = [10, 20, 30];
const iterator = array[Symbol.iterator]();

console.log(iterator.next().value);

// Symbols
const secret = Symbol('secret');

const data = {
    publicInfo: 'Visible',
    [secret]: 'Hidden'
};

for (const key in data) {
    console.log(key); // Outputs: 'publicInfo'
}

console.log(Object.keys(data));
console.log(data[secret]);

// Retrieving the value from the symbols
const symbols = Object.getOwnPropertySymbols(data);
console.log(symbols);

// Watch this video to understand more https://www.youtube.com/watch?v=4J5hnOCj69w&t=56s