// anytime we are creating an interface we are creating a new type, a type in the same way that number is a type, string or a boolean

// name of interfaces start with capital letters with generic name

interface Vehicle {
  // what different properties that a vehicle can have
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic2 = {
  name: "civic",
  year: 2000,
  broken: true,
};

const printVehicle2 = (vehicle: Vehicle): void => {
  // in order to call printVehicle2 function, we must pass in an object that meets the specifications provided by the vehicle interface
  // the object vehicle satisfies the interface
  console.log(`name : ${vehicle.name}`);
  console.log(`year : ${vehicle.year}`);
  console.log(`broken? : ${vehicle.broken}`);
};

printVehicle2(oldCivic2);
