const addGettersAndSetters = require("../src/exercise-3-bonus");

test("test6", () => {
let users = [{
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
  },
  {
    nul: null,
    undef: undefined
  }
];

let length = users.length;
for (let i = 0; i < length; i += 1) {
  addGettersAndSetters(users[i]);
}


expect(users[0].getName()).toEqual("Peter");
expect(users[0].getAge()).toEqual(32);
expect(users[1].getRandom()).toEqual(12345);
expect(users[1].getName()).toEqual("John");
expect(users[1].getAge()).toEqual(15);
expect(users[2].getId()).toEqual(15);
expect(users[2].getName()).toEqual("Jim");
expect(users[2].getAge()).toEqual(16);
expect(users[3].getNul()).toEqual(null);
expect(users[3].getUndef()).toEqual(undefined);

users[2].setName("Peter");
users[2].setAge(15);
expect(users[2].getCountOfModification()).toEqual(2);

});