const Person = require("./person")

class Human extends Person {

  constructor(name, age, state, uid) {
    super(state, uid);
    this._name = name;
    this._age = age;
  }

  getName() {
    return this._name
  }

  sayHello() {
    return `Hello from: ${this.getName()}.`
  }
}

module.exports = Human