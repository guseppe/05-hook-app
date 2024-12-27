import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'recolectar la piedra del alma',
    //     done: false
    // },

    //...JSON.parse(localStorage.getItem("todos"))
];
const init = () =>{
    return JSON.parse(localStorage.getItem("todos")) || []; //intenta parsear y si es nulo devuelve un arreglo vacio
}
export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    useEffect(() => {
        const todosString = JSON.stringify(todos);
        localStorage.setItem("todos", todosString);
    }, [todos]);
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }
        dispatch(action);
    }
    const handleDelete = (todo) => {
        const action = {
            type: '[TODO] delete todo',
            payload: todo
        }
        dispatch(action);
    }
    const handleToggleTodo = (todo) => {
        const action = {
            type: '[TODO] toggle todo',
            payload: todo
        }
        dispatch(action);
    }
    return {
        todos, 
        allTodosCount: todos.length,
        pendingTodosCount: todos.filter(t => !t.done).length, 
        handleDelete, 
        handleToggleTodo, 
        handleNewTodo
    }
}

