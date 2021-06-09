const warehouse = require("./warehouse");

function CarFactory(power = 10) {

  this.produceCar = function(color = "red", wheels = 4, engine = false) {

    if (power >= 2) {
      const newCar = {
        id: warehouse.nextIdentifier, //auto incremented value which should be stored in warehouse
        color: color, //from param
        wheels: wheels, //from param
        engine: engine, //from param
      }

      warehouse.createdCars.push(newCar)
      warehouse.nextIdentifier++;
      power = power - 2
      return newCar
    } else {
      return null
    }

  }

  this.addEnergyPower = (value = 0) => power = power + value

  this.changeCarColor = (car, newColor) => {
    if (power >= 1) {
      car.color = newColor
      power = power - 1
      return car
    } else {
      return null;
    }
  }

  this.warehouse = warehouse

}

module.exports = CarFactory;


