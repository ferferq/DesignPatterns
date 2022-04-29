import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';
import { VeganDishBuilder } from '../../creational/builder/classes/vegan-dish-builder';

export class BuilderFacade {
  // essa é a fachada para a pasta src/creational/builder/index.ts
  private mainDishBuilder = new MainDishBuilder();
  private veganDishBuilder = new VeganDishBuilder();

  makeMainMeal(): void {
    this.mainDishBuilder.makeMeal();
    console.log(this.mainDishBuilder.getMeal());
    console.log(this.mainDishBuilder.getPrice());
  }

  makeBeverageMainMeal(): void {
    this.mainDishBuilder.reset();
    const meal = this.mainDishBuilder.makeBeverage().getMeal();
    console.log(meal);
  }

  makeVeganMeal(): void {
    this.veganDishBuilder.makeMeal();
    console.log(this.veganDishBuilder.getMeal());
    console.log(this.veganDishBuilder.getPrice());
  }
}
