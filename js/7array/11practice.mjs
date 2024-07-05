//["my","name","is", "kritika"] => ["My","Name","Is", "kritika"]
let firstLetterCapital = (input) => {
  let inputAr1 = input.split("");
  let inputAr2 = inputAr1.map((value, i) => {
    if (i === 0) {
      return value.toUpperCase();
    } else {
      return value.toLowerCase();
    }
  });
  let output = inputAr2.join("");
  return output;
};

let realInput = ["my", "name", "is", "kritika"];
let realOutput = realInput.map((value, i) => {
  return firstLetterCapital(value);
});
console.log(realOutput);
