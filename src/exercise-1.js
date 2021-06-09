/*
can't use Boolean(value)
consume any number of parameters
return array of objects
object per single param passed to the function
each object should contains:
   - isFalsy
   - type
   - stringLength
   - index
  [
        {
            "isFalsy": false,
            "type": "number",
            "StringLength": 1,
            "index": 0
        },
        ...
  ]
 */

function getInfo(...values) {
  var results = [];


  values.forEach((value, index) => {
    results.push({
      "isFalsy": !value,
      "type": typeof value,
      "StringLength": value.toString().length,
      "index": index
    })


  });
  return results
}


module.exports = getInfo;

