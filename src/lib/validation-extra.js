module.exports = {
  validate: function(schema, valuesToValidate) {
    const keysWithInvalidValue = [];

    for (let key of Object.keys(schema)) {
      if (!schema[key].call(undefined, valuesToValidate[key])) {
        keysWithInvalidValue.push(key)
      }
    }

    return keysWithInvalidValue;
  }
}