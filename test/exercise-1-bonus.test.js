const process = require("../src/exercise-1-bonus");

test("test2", () => {
  expect.assertions(12);

  let functions = {
    string:  function (value) {
      return value.length
    },
    number: function (value) {
      return value * 2;
    },
    function: function (func) {
      return func();
    },
    default: function () {
      return 42
    }
  };

  let values = [11, 0, "bla", () => {return null}, false, () => {return 222}];

  let result = process(functions, values);
  expect(result.length).toEqual(5);
  expect(result[0]).toEqual({
    input: 11,
    output: 22
  });
  expect(result[1]).toEqual({
    input: 0,
    output: 0
  });
  expect(result[2]).toEqual({
    input: "bla",
    output: 3
  });
  expect(result[3]).toEqual({
    input: false,
    output: 42
  });
  expect(typeof result[4].input).toEqual("function");
  expect(result[4].output).toEqual(222);



  functions = {
    string:  function () {
      let err = new Error();
      err.status = 400;
      err.code = "invalidDtoIn";
      throw err
    },
    default: function () {
      return 42
    }
  };

  values = [11, "bla", 0];

  result = process(functions, values);
  expect(result.length).toEqual(2);
  expect(result[0]).toEqual({
    input: 11,
    output: 42
  });
  expect(result[1]).toEqual({
    input: 0,
    output: 42
  });

  functions = {
    string:  function () {
      let err = new Error();
      err.status = 500;
      err.code = "internalServerError";
      throw err
    },
    default: function () {
      return 42
    }
  };

  values = [11, "bla", 0];

  try {
    process(functions, values);
  } catch (e) {
    expect(e.status).toEqual(500);
    expect(e.code).toEqual("internalServerError");
  }

});