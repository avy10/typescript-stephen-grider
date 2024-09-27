interface Reportable {
  /*     // In order to be considered type reportable, 
    you must have a function that returns a string type value */
  summary(): string;
}

const oldCivic5 = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printSummary = (item: Vehicle): void => {
  console.log(item.summary());
};

printSummary(oldCivic5);
