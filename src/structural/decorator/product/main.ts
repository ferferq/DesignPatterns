import { ProductCustomizationDecorator } from './product-customization-decorator';
import { ProductDecorator } from './product-decorator';
import { ProductStampDecorator } from './product-stamp-decorator';
import { TShirt } from './t-shirt';

const tShirt = new TShirt();
const decoratedTShirt = new ProductDecorator(tShirt);
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const tShirtWithStampFrontAndBack = new ProductStampDecorator(tShirtWithStamp);
const customizedTShirt = new ProductCustomizationDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(decoratedTShirt.getPrice(), decoratedTShirt.getName());
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName());
console.log(
  tShirtWithStampFrontAndBack.getPrice(),
  tShirtWithStampFrontAndBack.getName(),
);
console.log(customizedTShirt.getPrice(), customizedTShirt.getName());
