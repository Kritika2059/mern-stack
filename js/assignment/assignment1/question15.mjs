// Create an arrow function named isEmptyArray that takes one 
// input and returns true if the given array is empty, 
// otherwise returns false.

const isEmptyArray = (arr) => arr.length === 0;

// Example
console.log(isEmptyArray([])); // true
console.log(isEmptyArray([1, 2, 3])); // false
console.log(isEmptyArray([null])); // false, since an array with null is not empty in JavaScript
