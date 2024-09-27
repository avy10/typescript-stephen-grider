interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
  // anything that wants to be a Vehicle has to have a function called summary which has to return a string
  // the function takes in no arguments
}

const oldCivic3 = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle3 = (vehicle: Vehicle): void => {
  console.log(`name : ${vehicle.name}`);
  console.log(`year : ${vehicle.year}`);
  console.log(`broken? : ${vehicle.broken}`);
  console.log(vehicle.summary());
};

printVehicle3(oldCivic3);
