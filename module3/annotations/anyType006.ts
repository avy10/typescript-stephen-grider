
// examples on type annotations  

// When to use Type annotations
// 1) Function that returns the "any" type

const json = `{
    "x" : 10,
    "y" : 20
}`




const coordinates : { x : number; y : number} = JSON.parse(json)


console.log(coordinates)


// 2. When we declare a variable on one line and initialise it later

let words = ["red", "green", "blue"];

// let foundWord : boolean;
let foundWord = false;
for(let i = 0; i < words.length; i++){
    if(words[i] === "green") {
        foundWord = true;
    }
}

// Variables whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero : boolean | number = false; 
/* 
The goal is to find a number greater than 0 and assign it to the variable or in case we don't find a number greater than 0 then we assign false to the variable numberAboveZero
That would mean we are Going to have two different types of values being assigned to this variable, it is not a good practice. It is a bad code
*/

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
        numberAboveZero = numbers[i]

    }
}