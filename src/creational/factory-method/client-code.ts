/******************************************* *\
 *
//import { Car } from './vehicle/car';

// const fusca = new Car('Fusca');
// fusca.pickUp('Joana');
// fusca.stop();

/******************************************* *\

// import { CarFactory } from './factories/car-factory';

// const carFactory = new CarFactory();
// const fusca = carFactory.getVehicle('Fusca');
// fusca.pickUp('Joana');
// fusca.stop();

/******************************************* *\
*/
import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const customerNames = ['Joana', 'Ana', 'Beatriz', 'Marcela'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];

  vehicle.pickUp(name);
  vehicle.stop();
  console.log('---');
}
