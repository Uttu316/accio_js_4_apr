console.log("A");
const p = new Promise((resolve, reject) => {
  //sync
  console.log("B");
  const name = prompt("Enter Username");
  //async
  setTimeout(() => {
    console.log("C");
    if (name === "ABC") {
      resolve("Good"); //async
    } else {
      reject("Bad"); //async
    }
    console.log("D");
  }, 1000);
  console.log("E");
});
console.log("F");
p.then((value) => {
  //async
  console.log(value);
}).catch((error) => {
  //async
  console.log(error);
});
console.log("G");
