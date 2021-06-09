/*
validationTypes should export functions with names: String, Number, Any
each function consume one parameter and check if the passed value is the corresponding type

validate is the function that consume two parameters:
- object with schema
- object with values
both objects share the same keys Object.keys(schema)
iterate over these keys to run function from the schema with a value from the second object
store invalid values
 */


const ValidationTypes = require("./lib/validation-types-extra");
const {validate} = require("./lib/validation-extra");

const schema = {
  name: ValidationTypes.string,
  age: ValidationTypes.number,
  extra: ValidationTypes.any,
  details: ValidationTypes.shape({
    city: ValidationTypes.string,
    info: ValidationTypes.shape({
      id: ValidationTypes.number,
      something: ValidationTypes.any
    })
  })
};

const values = {
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

let result = validate(schema, values); //return array of invalid keys
console.log(result.length === 0 ? "valid" : "invalid keys: " + result.join(", "));
//invalid keys: $.age, $.details.city, $.details.info.id


