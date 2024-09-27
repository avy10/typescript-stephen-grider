interface Vehicle {
  summary(): string;
}

const oldCivic4 = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle4 = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle4(oldCivic4);

/* 
1. In our function we are only accessing the summary property of the vehicle object
2. we are gonna remove all the other type annotation about name, year, broken for now
3. this would not give error
4. behind the scenes TS is doing the check, it checks that function is using these variables
5. so when we call the function printVehicle4, TS checks if the "vehicle" object satisfies the Vehicle interface
6.  and inside the Vehicle interface, TS would see that in order to be a vehicle, you must have a function called summary that returns a string
7. now the oldCivic4 object does have a summary property
8. that is the only thing that gets checked, it does not matter that we have additional properties on Old Civic
9. when TS decides if oldCivic4 is a vehicle or not, it's not going to say that you have these extra properties, so u can't be a Vehicle
10. if oldCivic4 has the list of properties defined in Vehicle interface, then oldCivic4 is a Vehicle. (It does not matter that it has other properties)
*/
