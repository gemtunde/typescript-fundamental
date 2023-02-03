type ID = string | number | boolean;

function Id(id: ID) {
  if (typeof id === "string") {
    console.log(id.toLocaleUpperCase());
  } else if (typeof id === "number") {
    console.log(id * 6);
  } else {
    console.log(id);
  }
}
Id("tunde");
Id(9);

//using types for object literals. although using interface is best practice
type PRODUCT = {
  name: string;
  price: number;
};

const product: PRODUCT = {
  name: "Luttos Vuiton",
  price: 345,
};

//using interface for objects
// interface is better cox u can extend it

interface CATEGORY {
  name: string;
  price: number;
  //optional
  color?: string;
}
interface CATEGORY {
  inStock: boolean;
}
const category: CATEGORY = {
  name: "Versace",
  price: 4000,
  inStock: true,
};
//another example of interface

interface INVENTORY_ITEM {
  name: string;
  price: number;
}
interface MY_PRODUCT extends INVENTORY_ITEM {
  color?: string;
}
interface SERVICE extends INVENTORY_ITEM {
  startDate: Date;
  endDate: Date;
}
const tshirt: MY_PRODUCT = {
  name: "tommy-hilfiger",
  price: 1200,
};

const photoShoot: SERVICE = {
  startDate: new Date("June 10, 2021 11:00:00"),
  endDate: new Date("June 10, 2021 12:00:00"),
  name: "Kelvin Clein",
  price: 300,
};

//using function parameters
// the item is turn to an object becos of INVENTORY_ITEM
function purchaseItem(item: INVENTORY_ITEM): INVENTORY_ITEM {
  console.log(item);

  //this wont work becos the shape of the return data is object and we are returning a string
  // return item.price
  return item;
}
//pass an objext parameter here and Not a string or number
purchaseItem({ name: "Polo shirt", price: 2900 });
purchaseItem(tshirt);
