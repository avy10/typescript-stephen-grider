import axios from "axios"
const URL = `https://jsonplaceholder.typicode.com/todos/1`
interface Todo {
    id : number,
    title : string, 
    completed : boolean
    // Interfaces in TypeScript are used to define the structure of an object
    // Here we have defined the structure of the object based on the network response received
    // this will be the definition for any object we want
    // so, in const todo = res.data as Todo, we are saying that the todo object should have definition as set in Todo interface
}
axios.get(URL).then (res => {
    
    const todo = res.data as Todo;
    // const {id : ID, title, finished } = todo ; // because finished is a variable which is not present in our type definition, TS will give an error in code editor
    // in JS, we would get finished as undefined 

    const { id, title, completed } = todo ;
    logTodo(id, title, completed, )
})

const logTodo = (id : number, title : string, completed : boolean ) => { 
    console.log(`
        The Todo with id : ${id}
        Has a title of: ${title}
        Is it finished? ${completed}`);
}