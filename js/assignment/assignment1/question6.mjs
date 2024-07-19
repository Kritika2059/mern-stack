//Create an arrow function named isGreaterThanOrEqualTo20 
//that takes one input and returns true if the given age 
//is greater than or equal to 20, otherwise returns false.

const isGreaterThanOrEqualTo20 = age => age >= 20;

console.log(isGreaterThanOrEqualTo20(20)); // true
console.log(isGreaterThanOrEqualTo20(19)); // false
console.log(isGreaterThanOrEqualTo20(25)); // true
console.log(isGreaterThanOrEqualTo20(15)); // false
// console.log(isGreaterThanOrEqualTo20(20.0)); // true, since 20 and 20.0 are considered equal in JavaScript
