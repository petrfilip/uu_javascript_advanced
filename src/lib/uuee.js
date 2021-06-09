const Person = require("./person")

class Uuee extends Person {

  constructor(owner, state, uid) {
    if (!(owner instanceof Person)) {
      throw Error("owner have to be person")
    }

    super(state, uid);
    this._owner = owner
  }

  sayHello(caller) {
    if (caller === this._owner) {
      return `Hello ${caller.getName()}.`
    } else {
      return "No!"
    }
  }
}

module.exports = Uuee