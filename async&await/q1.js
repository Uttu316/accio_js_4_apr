async function getData() {
  console.log("A");

  console.log("B");

  throw 1; // return Promise.reject(1)
  //return 1 // return Promise.resovle(1)
}

let o = getData();
o.then((v) => {
  console.log(v);
}).catch((e) => {
  console.log("error", e);
});
