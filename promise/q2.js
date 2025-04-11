const p = new Promise((res, rej) => {
  res(2);
});

p.then((v) => {
  console.log(v);
  return v + 2;
})
  .then((v) => {
    console.log(v);
    return v + 3;
  })
  .then((v) => {
    console.log(v);
  })
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log(e);
  });
