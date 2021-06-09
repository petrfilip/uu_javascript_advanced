

/*
fill the function that executes each value with a function that has the same name as the typeof value
these functions are passed as the first parameter in the object like this:
{
string: function(value) { ... },
default: function(value) { ... }
}
the second parameter is an array of values to be processed
if there is no corresponding function, use the default one
these function could throw an error, so you have to handle them
  - each error has status and code
  - if the error status (e.status) is over 500, rethrow the error, if not, console log the e.code
store the result of each function call
filter results out of null and undefined
return following structure in the array for each input value:
{
input: "...",
output: "..."
}
*/

function process(functions = {}, values = []) {
  let functionResults = [];

  values.forEach((value) => {

  });


  return results
}


module.exports = process;


