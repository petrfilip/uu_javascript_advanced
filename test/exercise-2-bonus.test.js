const {string, number, any, shape} = require("../src/lib/validation-types-extra");
const {validate} = require("../src/lib/validation-extra");

test("test4", () => {
  expect(string("a")).toEqual(true);
  expect(string("")).toEqual(true);
  expect(string(2)).toEqual(false);
  expect(string(true)).toEqual(false);

  expect(number("a")).toEqual(false);
  expect(number("")).toEqual(false);
  expect(number(2)).toEqual(true);
  expect(number(true)).toEqual(false);

  expect(any("a")).toEqual(true);
  expect(any("")).toEqual(true);
  expect(any(2)).toEqual(true);
  expect(any(true)).toEqual(true);

  expect(shape({})).toEqual({});
  let obj = {
    neco: 5,
    dalsi: "222"
  };
  expect(shape(obj)).toEqual(obj);
  expect(shape(null)).toEqual(null);


  let schema = {
    name: string,
    age: number,
    extra: any,
  };

  let values = {
    name: "John",
    age: "",
    extra: false,
  };

  expect(validate(schema, values)).toEqual(["$.age"]);

  schema = {
    name: string,
    age: number,
    extra: string,
  };

  values = {
    name: 8,
    age: 222,
    extra: false,
  };

  expect(validate(schema, values)).toEqual(["$.name", "$.extra"]);

  schema = {
    name: string,
    age: number,
    extra: any,
    details: shape({
      city: string,
      info: shape({
        id: number,
        something: any
      })
    })
  };

  values = {
    name: "John",
    age: "ne",
    extra: false,
    details: {
      city: 2,
      info: {
        id: "ne",
        something: []
      }
    }
  };

  expect(validate(schema, values)).toEqual(["$.age", "$.details.city", "$.details.info.id"]);

  values = {
    name: "John",
    age: "ne",
    extra: false,
    details: {
      city: "222",
      info: {
        id: () => {return 5},
        something: []
      }
    }
  };

  expect(validate(schema, values)).toEqual(["$.age", "$.details.info.id"]);

});