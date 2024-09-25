import axios from "axios"
const URL = `https://jsonplaceholder.typicode.com/todos/1`
interface Todo {
    id : number,
    title : string, 
    completed : boolean
    // Interfaces in TypeScript are used to define the structure of an object
}
axios.get(URL).then (res => {
    
    const todo = res.data as Todo;
    // const {id : ID, title, finished } = todo ;
    const { id, title, completed } = todo ;
    logTodo(id, title, completed, )
})

const logTodo = (id : number, title : string, completed : boolean ) => {
    console.log(`
        The Todo with id : ${id}
        Has a title of: ${title}
        Is it finished? ${completed}`);
}