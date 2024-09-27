/* 
1. about the type of arguments that a function will receive
2. type of value that it will return
3. Type Inference only works to figure out the return value of a function
it will try to figure out the type of value returned by the function,
but it will not return the type of value the arguments are\

4. We have to ALWAYS USE type annotations with function arguments
5. we do get the type inference for the return type of our function, but WE ARE NOT gonna use that 
6. ALWAYS manually define the return type of the return type
*/
const add = (a : number, b : number) : number => {
    return a + b;
}

// 7. Alternate syntax around functions
function divide(a : number, b : number) : number {
    return a / b;
}

// anonymous function

const multiply = function (a : number, b : number) : number {
    return a * b;
} 

// void and never

const logger = (message : string) : void => {
    console.log(message);
    // technically a function that returns void can return null or undefined
    // effectively we use void return type annotation to say there will be no return value from this function 

}

const throwError = (message : string) : never => {
    throw new Error(message);
    // anytime we Throw an error the function technically does not actually return anything
    // to indicate that we could put on a colon right here that says never,
    // which means that we are never going to reach the end of this function.
    // At some point inside the function body we are going to throw an error and exit the function early without returning any value
}

// usually we do not handle error like that, it is more conditional
const throwErrorCopy = (message : string) : string => {
    if(!message){

        throw new Error(message);
    }

    return message
    // In this case we will throw the error conditionally but if we do not throw an error then we are going to return the message and then we gotta define the type annotation of return data
    // Now it is possible that the function body might throw an error and exit early but the key here is that if the function returns anything it will be of type string as defined in the annotation
    // IMPORTANT : If we at least expect it to return something eventually and possibly throw an error, it is fine because, We are still going to annotate it with whatever we expect it to eventually return
}

// instead of never we could also set that function to be of return type annotation of void and it would work
const throwErrorCopyCopy = (message : string) : void => {
    throw new Error(message);

}

// 
// 

const todaysWeather = {
    date : new Date(),
    weather : "sunny"
}

// a function that is going to take the forecast and just log the weather
const logWeather = (todaysWeather : {date : Date, weather : string}) : void => {
    console.log(todaysWeather.date)
    console.log(todaysWeather.weather)
}

logWeather(todaysWeather)

// ES2015
// what if we with modern JS syntax and destructure the object right in the argument

/* const logWeatherJS= ({date, weather}) => {
    console.log(date)
    console.log(weather)
} */

// how to write a JS function like that in TS
// remove the todaysWeather (from the logWeather) and replace it with the destructuring syntax

const logWeatherModern= ({date, weather} : {date : Date, weather : string}) : void => {
    // notice that we did not try to stick the annotations type along with destructuring
    // the destructuring portion and annotaion are always going to be two separate statements separated by that colon
    console.log(date)
    console.log(weather)
}
