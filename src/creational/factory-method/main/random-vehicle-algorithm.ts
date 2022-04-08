import { BicycleFactory } from '../factories/bicycle';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/random-numbers';
import { Vehicle } from '../vehicle/vehicle';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta');
  const bicycle = bicycleFactory.getVehicle('Bicycle');
  const vehicle = [car1, car2, bicycle];

  return vehicle[randomNumbers(vehicle.length)];
}
