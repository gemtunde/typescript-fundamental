enum Sizes {
  small,
  medium = "medium",
  large = "large",
}

class Product {
  name: string;
  price: number;
  color: string = "grey";
  size: Sizes | undefined;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  buy(): this {
    console.log(this.price);
    return this;
  }
}

const tshirts = new Product("tommy hilfiger", 800);
tshirts.color = "red";
tshirts.size = Sizes.medium;
tshirts.buy();
