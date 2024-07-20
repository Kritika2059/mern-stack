//Create an arrow function named isGreaterThanOrEqualTo65 that
// takes one input and returns true if the given age is greater
// than or equal to 65, otherwise returns false.

const isGreaterThanOrEqualTo65 = age => age >= 65;

// Example
console.log(isGreaterThanOrEqualTo65(65)); // true
console.log(isGreaterThanOrEqualTo65(64)); // false
console.log(isGreaterThanOrEqualTo65(70)); // true
console.log(isGreaterThanOrEqualTo65(60)); // false
// console.log(isGreaterThanOrEqualTo65(65.0)); // true, since 65 and 65.0 are considered equal in JavaScript
