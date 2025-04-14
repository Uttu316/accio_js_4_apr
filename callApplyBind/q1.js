const user = {
  name: "ABC",
  getName(greeting, num) {
    console.log(this.name, greeting, num);
  },
  sayHello() {
    console.log(this);
  },
};

const pet = {
  name: "Don",
};
const car = {
  name: "Tata",
};

user.getName.call(pet, "Welcome", 2);
user.getName.apply(car, ["Welcome", 2]);

let myFn = user.sayHello.bind(car);

myFn();
