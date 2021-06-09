const Factory = require("../src/lib/factory");

test("test7", () => {
  let myFactory = new Factory(10);
  let energyBoosts = [7, 3, 4, 5, 4];

  let numberOfCars = 0;
  while (numberOfCars < 14) {
    if (myFactory.produceCar() !== null) {
      numberOfCars += 1
    } else {
      if (energyBoosts.length > 0) {
        myFactory.addEnergyPower(energyBoosts.shift())
      } else {
        break
      }
    }
  }

  for (let i = 0; i < myFactory.warehouse.createdCars.length; i += 2) {
    let car = myFactory.warehouse.createdCars[i];
    if (myFactory.changeCarColor(car) !== null) {} else {
      if (energyBoosts.length > 0) {
        myFactory.addEnergyPower(energyBoosts.shift());
        i -= 2;
      } else {
        break
      }
    }
  }

  expect(myFactory.warehouse.createdCars.length).toEqual(14);
  expect(myFactory.warehouse.createdCars[0]).toEqual({
    color: "blue",
    engine: false,
    id: 0,
    wheels: 4
  });

  expect(myFactory.warehouse.createdCars[1]).toEqual({
    color: "red",
    engine: false,
    id: 1,
    wheels: 4
  });
  expect(myFactory.warehouse.createdCars[2]).toEqual({
    color: "blue",
    engine: false,
    id: 2,
    wheels: 4
  });
  expect(myFactory.warehouse.createdCars[3]).toEqual({
    color: "red",
    engine: false,
    id: 3,
    wheels: 4
  });
  expect(myFactory.warehouse.createdCars[4]).toEqual({
    color: "blue",
    engine: false,
    id: 4,
    wheels: 4
  });
  expect(myFactory.warehouse.createdCars[5]).toEqual({
    color: "red",
    engine: false,
    id: 5,
    wheels: 4
  });

  expect(myFactory.warehouse.createdCars[8]).toEqual({
    color: "blue",
    engine: false,
    id: 8,
    wheels: 4
  });

  expect(myFactory.warehouse.createdCars[9]).toEqual({
    color: "red",
    engine: false,
    id: 9,
    wheels: 4
  });

  expect(myFactory.warehouse.createdCars[10]).toEqual({
    color: "red",
    engine: false,
    id: 10,
    wheels: 4
  });

  expect(myFactory.warehouse.createdCars[11]).toEqual({
    color: "red",
    engine: false,
    id: 11,
    wheels: 4
  });



});