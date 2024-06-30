//forEach doesnot returns any data

let ar1 = ["kritika", "kridip", "diya"];
ar1.forEach((value, i) => { //writing 'i' is not necessary but we need to be used to with writing i
  let name = `${value} Pandey`;
  console.log(name);
});