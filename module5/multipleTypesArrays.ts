// Flexible types

// in this array some elements are going to be instance of date object, and some of them are going to be strings

// const importantDates = [new Date(), "2030-10-10"];
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-10-10");
importantDates.push(new Date());
