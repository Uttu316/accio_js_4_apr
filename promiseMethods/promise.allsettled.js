const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("A");
  }, 2000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("B");
  }, 1500);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("C");
  }, 1000);
});

const p = Promise.allSettled([p1, p2, p3]);

p.then((res) => {
  console.log(res);
}).catch((e) => {
  console.log(e);
});
