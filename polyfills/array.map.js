fn;
Array.prototype.map = null;

if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
      let curr = callback(this[i], i, this);
      output.push(curr);
    }
    return output;
  };
}

let arr = ["A", "B", "C", "D"];

let out = arr.map((item, index, array) => {
  console.log(item, index);
  return item + index;
});
console.log(out);
