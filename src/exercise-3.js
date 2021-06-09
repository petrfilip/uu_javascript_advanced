/*
use implicit and explicit binding to validate age using the function validateAge
both function should return array of filtered users
do not forget to also delete used function (implicit binding)
 */

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

//do not modify this function
function validateAge(age) {
  if (this.age < age) {
    return true
  } else {
    return false
  }
}

function usingImplicitBinding(users, validateAgeFunc, ageLimit) {
  let invalidUsers = [];

  return invalidUsers;
}

function usingExplicitBinding(users, validateAgeFunc, ageLimit) {
  let invalidUsers = [];

  return invalidUsers;
}

module.exports = {
  usingExplicitBinding,
  usingImplicitBinding,
  validateAge
};





