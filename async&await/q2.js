function api() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("hello");
    }, 2000);
  });
}

async function getData() {
  try {
    console.log("A");

    const res = await api();
    console.log("B", res);
  } catch (e) {
    console.log("Error", e);
  }
}

console.log("C");

getData();
console.log("D");
