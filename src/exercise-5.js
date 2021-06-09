/*
implement following three classes:
  abstract class Person
  - constructor accepts two parameters: state (active or inactive) and uid
  - both parameters should have default values - active and 0-0
  - methods:
    - getState() - return state
    - setState(newValue) - sets the state to a new value
      - check that passed value is "active" or "inactive" otherwise, it throws an exception
    - getUid() - return uid
    - static getCountOfPersons() - return total count of created persons

  Human - inherits from Person
  - constructor accepts four parameters: name, age, state, uid
  - methods:
    - getName() - return name
    - sayHello() - return: "Hello from {humanName}."

  Uuee - inherits from Person
  - constructor accepts three parameters: owner, state, uid
  - check that owner is instance of Human otherwise, it throws an exception
  - methods:
    - sayHello(caller) - if the caller is the owner: return "Hello {ownerName}." otherwise return "No!"
*/



const Person = require("./lib/person");
const Human = require("./lib/human");
const UuEE = require("./lib/uuee");



let John = new Human("John", 25);
let Peter = new Human("Peter", 32);
let machine = new UuEE(John);

machine.sayHello(Person); //no
machine.sayHello(John); //Hello John :)



