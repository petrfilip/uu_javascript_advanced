/*
use new binding to create object from Factory
created instance should have following functions:
  produceCar(color="red", wheels=4,engine=false)
  - at first, you need to check that you have enough power for creating a new car (2 power per car)
  - if there is not enough energy, shift energy from energyBoosts using addEnergy function
  - this function produce object representing a car with structure below:
    {
    id: 0 //auto incremented value which should be stored in warehouse
    color: "...", //from param
    wheels: "...", //from param
    engine: "...", //from param
    }
  - store created car in the warehouse and increment nextIdentifier
  addEnergyPower(value=0)
    add energy to factory
  changeColor(car, newColor)
  - at first, you need to check that you have enough power to change a color(1 power per car)
  - if there is not enough energy, shift energy from energyBoosts using addEnergy function
  - change the color

*/

const Factory = require("./lib/factory");
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


//myFactory.warehouse; //JSON.stringify(myFactory.warehouse, null, 2)

