function sum(a) {
  let ans = a;

  function add(x) {
    if (x === undefined) {
      return ans;
    } else {
      ans += x;
      return add;
    }
  }
  return add;
}

// let ans = sum(1, 6, 9, 5, 3)(2)(3, 2)(4)();
let ans = sum(1)(2)(3)(4)();
console.log(ans);
//6
