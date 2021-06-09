/*
use function "addGettersAndSetters" to add getters and setters for each key of the object in the array
add extra method getCountOfModification to each object which will
return count of used setters for that specific object

name ->  users[0].getName()
name -> users[0].setName(newValue)
*/

let users = [
  {
    name: "Peter",
    age: 32,
  },
  {
    name: "John",
    age: 15,
    random: 12345
  },
  {
    name: "Jim",
    age: 16,
    id: 15
  }
];

/**
 * https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function addGettersAndSetters(obj) {

  Object.keys(obj).forEach(att => {
    const attributePostfix = capitalizeFirstLetter(att); // capitalize
    obj["get" + attributePostfix] = () => { // getter
      return obj[att]
    };
    obj["set" + attributePostfix] = (inputValue) => {
      obj[att] = inputValue
    }
  })
  obj.modificationCount = 0
  obj.getCountOfModification = () => 2

}

module.exports = addGettersAndSetters;

