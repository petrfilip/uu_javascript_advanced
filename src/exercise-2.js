/*
validationTypes should export functions with names: string, number, any
each function consume one parameter and check if the passed value is the corresponding type

validate is the function that consume two parameters:
- object with schema
- object with values
both objects share the same keys - Object.keys(schema) to get these keys as array
iterate over these keys to run function from the schema with a value from the second object
store invalid values
 */


const ValidationTypes = require("./lib/validation-types");
const {validate} = require("./lib/validation");

const schema = {
  name: ValidationTypes.string,
  age: ValidationTypes.number,
  extra: ValidationTypes.any,
};

const values = {
  name: "John",
  age: "",
  extra: false,
};

let result = validate(schema, values); //return array of invalid keys
console.log(result.length === 0 ? "valid" : "invalid keys: " + result.join(", "));
//invalid keys: age


