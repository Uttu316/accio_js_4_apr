//creating scenario of not having at function inbuiltly
Array.prototype.at = null;

if (!Array.prototype.at) {
  //need a polyfills of at
  Array.prototype.at = function (index) {
    const array = this;

    return array[index];
  };
}

const arr = ["A", "B", "C"];

const ans = arr.at(1);

console.log(ans);
