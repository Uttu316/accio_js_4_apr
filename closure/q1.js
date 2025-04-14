function abc() {
  let p = 2;
  let q = 3;

  function xyz() {
    console.log(p + q);
  }
  return xyz;
}

let callback = abc();

callback();
