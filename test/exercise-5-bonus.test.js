const Factory = require("../src/exercise-5-bonus");

test("test9", () => {

  let h1 = Factory.createInstance("Human", ["John", "15", "active", "2-1"]);
  let h2 = Factory.createInstance("Human", ["Peter", "15", "active", "2-3"]);
  let h3 = Factory.createInstance("Human", ["Paul", "15", "active", "2-4"]);
  let h4 = Factory.createInstance("Human", ["Jim", "15", "active", "1-5"]);
  let u1 = Factory.createInstance("Uuee", [Factory.getInstance("2-1"), "active", "3-2"]);
  let u2 = Factory.createInstance("Uuee", [Factory.getInstance("2-3"), "active", "3-6"]);

  let list = Factory.getListListOfInstances();

  expect(list.length).toEqual(5);
  expect(Factory.getListListOfInstances()[0] === h2).toEqual(true);
  expect(Factory.getListListOfInstances()[1] === h3).toEqual(true);
  expect(Factory.getListListOfInstances()[2] === h4).toEqual(true);
  expect(Factory.getListListOfInstances()[3] === u1).toEqual(true);
  expect(Factory.getListListOfInstances()[4] === u2).toEqual(true);
  expect(u2.sayHello(h2)).toEqual("Hello Peter.");
});