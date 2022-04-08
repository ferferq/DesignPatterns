import { MainDishBuilder } from './classes/main-dish-builder';
import { MealBox } from './classes/meal-box';
import { Rice, Beans, Meat } from './classes/meals';

const rice = new Rice('Rice', 12);
const beans = new Beans('Beans', 5);
const meat = new Meat('Meat', 10);
const mealBox = new MealBox();
mealBox.add(rice, beans, meat);
console.log(mealBox);
console.log(mealBox.getPrice());

//COM BUILDER
const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeBeverage();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());
