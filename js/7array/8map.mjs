let ar1 = ["k", "r", "I", "t", "I", "K", "A"];

let ar2 = ar1.map((value, i) => {
  if (i === 0) {
    return value.toUpperCase();
  } else {
    return value.toLowerCase();
  }
});
console.log(ar2);
