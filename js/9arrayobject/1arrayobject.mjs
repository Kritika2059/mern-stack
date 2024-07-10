let product = [
  {
    name: "laptop",
    price: 100000,
  },
  {
    name: "mobile",
    price: 30000,
  },
  {
    name: "Tv",
    price: 200000,
  },
];

//["laptop","mobile","tv"]

let output = product.map((value, i) => {
  return value.price;
});
console.log(output);




let output3 = product.map((value,i) => {
    return `${value.name} costs rs ${value.price}`
})
console.log(output3);



let output4 = product.filter((value,i) => {
if(value.price > 5000)
    {
        return true
    }
})
console.log(output4)


let output5 = product.filter((value,i) => {
    if(value.price > 30000)
        {
            return true
        }
})
let output6 = output5.map((value,i) =>{
    return value.name
})
console.log(output6)


