import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodos = () => {
    const initialState = [];
    // funcion para hacer persistente el localStorage
    const init = () => {
        return JSON.parse(localStorage.getItem('todo')) || [];
    }
    const [todo, dispatch] = useReducer(todoReducer, initialState,init); 
    console.log(todo);
    
    // localEstorage
    useEffect(() => {
      localStorage.setItem('todo', JSON.stringify(todo) || []);
    }, [todo])
    console.log(localStorage.getItem('todo'));
    

    // payload
    const handleTodo = (todo)=>{
        const action = {
            type: '[TODO] add todo',
            payload: todo
        }
        //enviar a reducer
        dispatch(action);    
    }
    // payload
    const handleDeleteTodo = (id)=>{
        const action = {
            type: '[TODO] remove todo',
            payload: id
        }
        // //enviar a reducer
        dispatch(action);    
    }
    // payload
    const handleToggleTodo = (id)=>{
        console.log(id);
        const action = {
            type: '[TODO] toggle todo',
            payload: id
        }
        // //enviar a reducer
        dispatch(action);    
    }

    return {todo,todosCount: todo.length,pendientCount: todo.filter(todo => !todo.done).length,handleTodo,handleDeleteTodo,handleToggleTodo}
}
