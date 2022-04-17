export abstract class ProductComponent {
  abstract getPrice(): number;

  add(...products: ProductComponent[]): void {}
  remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposed extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }
  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex > -1) this.children.splice(productIndex, 1);
  }
  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

//client

const pen = new ProductLeaf('pen', 5);
const smartphone = new ProductLeaf('smartphone', 1000);
const tShirt = new ProductLeaf('tShirt', 20);

const productBox = new ProductComposed();
productBox.add(pen, smartphone, tShirt);

const tablet = new ProductLeaf('tablet', 1500);
const kindle = new ProductLeaf('kindle', 1000);
const anotherProductBox = new ProductComposed();
anotherProductBox.add(tablet, kindle);

productBox.add(anotherProductBox);

console.log(productBox);
