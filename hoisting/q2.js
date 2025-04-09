let a = { a: 1, b: 2 };
let b = { p: 2, q: 3 };

a[b] = 4;

a.b = 5;

b["p"] = 1;

b[a] = 4;

console.log(a, b);
