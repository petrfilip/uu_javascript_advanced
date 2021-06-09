const { string, number, any} = require("./validation-types");

function shape (inputValue) {
  if (typeof inputValue !== "object") {
    return false
  }
  return inputValue //todo

}

module.exports = {
  shape,
  string,
  number,
  any
}

