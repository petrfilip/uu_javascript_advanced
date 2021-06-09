module.exports = {
  string: (inputValue) => {
    return typeof inputValue === "string"
  },

  number: (inputValue) => {
    return typeof inputValue === "number"
  },

  any: () => {
    return true;
  },
}

