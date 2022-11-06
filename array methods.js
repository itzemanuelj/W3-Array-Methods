//shift remove
let array = ["A", "B", "C"];

//Removes the first element of the array
array.shift();

//===========================
console.log(array);
//output =>
//["B", "C"]

//unshift add
let cats = ['Bob', 'Willy', 'Mini'];

cats.shift(); // ['Willy', 'Mini']

// let cats = ['Bob']; 

cats.unshift('Willy'); // ['Willy', 'Bob']

cats.unshift('Puff', 'George'); // ['Puff', 'George', 'Willy', 'Bob'] 
//splice
let arr = ['foo', 'bar', 10, 'qux'];

// arr.splice(<index>, <steps>, [elements ...]);

arr.splice(1, 1);			// Removes 1 item at index 1
// => ['foo', 10, 'qux']

arr.splice(2, 1, 'tmp');	// Replaces 1 item at index 2 with 'tmp'
// => ['foo', 10, 'tmp']

arr.splice(0, 1, 'x', 'y');	// Inserts 'x' and 'y' replacing 1 item at index
//slice
//The slice() method extracts a section of a string and returns 
//it as a new string, without modifying the original string.

// same in array but you select elements not characters  


const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"

console.log(str.slice(0, 2)); 
// expected output: "the"
// Up to and including the last index!!!

const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']