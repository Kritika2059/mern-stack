//string => array
let ar1 = "my name is";

let ar2 = ar1.split(" ");
let ar3 = ar1.split("");
  //replaces each " " with a comma => changes the string into array 
  //OR whatever inside "" gets replaced with comma
  //if there is nothing inside "" then each letter is converted into array i.e each letter is splitted
console.log(ar2);
console.log(ar3);