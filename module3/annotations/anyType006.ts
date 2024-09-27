
// examples on type annotations  
/* There are 3 different scenarios where we are going to add the Type annotations manually instead
 */
// When to use Type annotations
// 1) when we have a Function that returns the "any" type, and we have to clarify it

const json = `{
    "x" : 10,
    "y" : 20
}`
let coordinatesCopy = JSON.parse(json)

// JSON.parse returns the datatype of "any" type, bcz the returned data from the function depends on the type of data sent by us users. TS would not know what a json string might contain bcz everything is a string
// TS is not tryna figure out that by reading out the string and figuring out the data type

// which is when we call a function, whose return type could be any data type, so it sets the returned type to "any"
// "any" means that TS got no clue abot the type of data returned by it

// to fix that we are gonna add a type annotation manually to it

const coordinates : { x : number; y : number} = JSON.parse(json)
console.log(coordinates)


// 2. When we declare a variable on one line and initialise it later
// in this instance type inference will not work, so we are gonna add manual type to it


let words = ["red", "green", "blue"];

// let foundWord : boolean;
let foundWord = false;
for(let i : number = 0; i < words.length; i++){
    if(words[i] === "green") {
        foundWord = true;
    }
}

// 3. Variables whose type cannot be inferred correctly.
// cannot be inferred correctly means that our variable can have different data types

// in the example below numberAboveZero is initially a boolean and later on it becomes a number


let numbers = [-10, -1, 12];
let numberAboveZero : boolean | number = false; 
/* 
The goal is to find a number greater than 0 and assign it to the variable or in case we don't find a number greater than 0 then we assign false to the variable numberAboveZero
That would mean we are Going to have two different types of values being assigned to this variable, it is not a good practice. It is a bad code
*/

for (let i : number = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
        numberAboveZero = numbers[i]

    }
}