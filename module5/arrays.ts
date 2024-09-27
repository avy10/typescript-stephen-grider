// arrays in TS
// Arrays should be consistent with type of value but, if you want to use an array with different types of values then we have to be very explicit about it and adding a special type annotation

const carMakers: string[] = ["ford", "toyota", "chevy"];

const dates: Date[] = [new Date(), new Date()];

// 2D arrays

// for 2D arrays we are going to double up on the syntax around the annotation that we put together

const carsByMake = [["F150"], ["Corolla"], ["camaro"]];

const f1DriversByTeam: String[][] = [
  ["Leclerc", "Sainz"],
  ["Hamilton", "Russell"],
  ["Verstappen", "Perez"],
  ["Piastri", "Norris"],
];

// Help with inference when extracting values
// i.e. when we take a value out of the array, TS does type inference on that value for us

const car = carMakers[0];
const myCar = carMakers.pop();

// Preventing incompatible values

// carMakers.push(100);

// Help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});
