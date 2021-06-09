const {usingExplicitBinding, usingImplicitBinding, validateAge} = require("../src/exercise-3");

test("test5", () => {

  let users = [{
    name: "Peter",
    age: 32,
    email: "peter@gmail.com"
  },
    {
      name: "John",
      age: 15,
      email: "John@gmail.com"
    },
    {
      name: "Jim",
      age: 16,
      email: "Jim@gmail.com"
    }
  ];

  let res = usingExplicitBinding(users, validateAge, 16);
  expect(res.length).toEqual(1);
  expect(res[0]).toEqual({
    name: "John",
    age: 15,
    email: "John@gmail.com"
  });

  res = usingExplicitBinding(users, validateAge, 17);
  expect(res.length).toEqual(2);
  expect(res[0]).toEqual({
    name: "John",
    age: 15,
    email: "John@gmail.com"
  });
  expect(res[1]).toEqual({
    name: "Jim",
    age: 16,
    email: "Jim@gmail.com"
  });

  res = usingImplicitBinding(users, validateAge, 17);
  expect(res.length).toEqual(2);
  expect(res[0]).toEqual({
    name: "John",
    age: 15,
    email: "John@gmail.com"
  });
  expect(res[1]).toEqual({
    name: "Jim",
    age: 16,
    email: "Jim@gmail.com"
  });

  res = usingImplicitBinding(users, validateAge, 16);
  expect(res.length).toEqual(1);
  expect(res[0]).toEqual({
    name: "John",
    age: 15,
    email: "John@gmail.com"
  });

});