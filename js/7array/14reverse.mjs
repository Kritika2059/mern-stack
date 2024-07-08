let ar1 = [1, 2, 3];
let ar2 = ar1.reverse();
console.log(ar2);
console.log(ar1); //reverse function changes the orignal data i.e ar1 in this program

//reverse words =>  ["my", "name", "is", "kritika"] =[ 'ym', 'eman', 'si', 'akitirk' ]
const reverseword = (input) => {
  return input.split("").reverse().join("");
};
let realInput = ["my", "name", "is", "kritika"];
let realOutput = realInput.map((value, i) => {
  return reverseword(value);
});
console.log(realOutput)
