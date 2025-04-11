console.log("A");
function abc() {
  console.log("B");
  setTimeout(() => {
    console.log("C");
  }, 2000);
  console.log("D");
  setTimeout(() => {
    console.log("E");
  }, 0);
  console.log("F");
}

console.log("G");

abc();
setTimeout(() => {
  console.log("I");
}, 100);
console.log("H");
