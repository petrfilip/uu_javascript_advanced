const allowedStates = ["active", "inactive"];

class Person {

  constructor(state = "active", uid = "0-0") {
    this._state = state;
    this._uid = uid
    Person.countOfPersons++;
  }

  getState() {
    return this._state
  }

  setState(newState) {
    if (!allowedStates.includes(newState)) {
      throw Error("ay caramba");
    }

    this._state = newState
  }

  getUid() {
    return this._uid;
  }

  static getCountOfPersons() {
    return Person.countOfPersons;
  }

}

Person.countOfPersons = 0

module.exports = Person