//intro
//1.o data types for primitive data type

//typecript ensures that data type dont change
// its very strict with data type
//e.g let price = 45
//        price = 'chelsea'
//it also ensures you dont just change or add your properties in an object
//e.g  food = {
//  orange : "yellow",
//  size: "big"
// }
//food.amount = 890

//implicit data type
let myNumber = 3;
// this will yield error becoz am assigning it another data-type of string => myNumber = 'excel'
myNumber = 89;
//same applies for strings and boolean too

// explicit data-types
let number: number = 45;
let player: string = "excel";
let man: boolean = true;
//you cannot assign this values another data-type

//with any, you can assign any data type
let club: any = "chelsea";
club = 79;
club = true;

//2.0 Non-primitive Data types e,g arrays and objects

//impilcit data type
const players = ["Ronaldo", "Messi", "Benzema", "Odegaard"];

//explcit data type
const myPlayers: string[] = ["Ronaldo", "Messi", "Benzema", "Odegaard"];

// TS wouldnt allow to push number to the array. becos the array is a sting type => myPlayers.push(4);
myPlayers.push("Salah");

//define data types for functions parameters
function sum(x: number, y: number) {
  return x + y;
}
console.log(sum(8, 9));

//define data types for returned valued in a functions
function mySum(x: number, y: number): number {
  return x + y;
}
console.log(sum(28, 89));

//functions with object literals

function add({ x, y }: { x: number; y: number }): number {
  return x + y;
}
add({ x: 5, y: 8 });

//use void type when your functions do not return anything

function log(value: any): void {
  console.log(value);
}

//functional parameter
function optional(name?: string) {
  if (name) {
    console.log(`Tunde ${name}`);
  } else {
    console.log("Welcome");
  }
}
optional("Welcome home");

//using union data types to a variables enables it to take 2 or more data types as specified
let myClub: string | number = "chelsea";
myClub = 89;

//union for function parameter
//we can accept a parameter of diff types
//but forces to treat each type differntly

function printId(id: string | number | boolean) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else if (typeof id === "number") {
    console.log(id * 5);
  } else {
    console.log(id);
  }
}
printId("five");
