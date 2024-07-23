async function callData() {
  const data = await fetch("https://dummyjson.com/users");
  const jsonData = await data.json();
  console.log(jsonData);
}
callData();
console.log("here");
