/// add a forEach property in prototype of Array and assign a function to it
// take a callback as a parameter
// access the array
// loop the array and call the callback fn for every iteration
// pass current iterative item, index and the array in arguments of the callback fn

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
}

let arr = ["A", "B", "C", "D"];

arr.forEach((item, index, array) => {
  console.log(item, index);
});
