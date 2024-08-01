// Create an arrow function named isEmptyString that takes one 
// input and returns true if the given string is empty, 
// otherwise returns false.

const isEmptyString = (str) => str === '';

// Example
console.log(isEmptyString('')); // true
console.log(isEmptyString('Hello')); // false
console.log(isEmptyString(' ')); // false, since a space is not an empty string in JavaScript
