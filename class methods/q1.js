class Promise {
  constructor() {
    this.sayHello = function () {
      //instance method give to each object
      console.log("Hello");
    };
  }
  static greet() {
    //static method given to Class itself
    console.log("Namaste");
  }
  sayBye() {
    //prototype function given to prototype of object
    console.log("Bye");
  }
}

const o = new Promise();
const o2 = new Promise();

o.sayHello();
