import { useEffect, useReducer } from "react"
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
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
export const TodoApp = () => {
  
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  useEffect(() => {
    const todosString = JSON.stringify(todos);
    localStorage.setItem("todos",todosString);
  }, [todos]);
  const handleNewTodo = (todo) => {
      const action = {
        type:'[TODO] Add todo',
        payload: todo
      }
      dispatch(action);
  }
  const handleDelete = (todo) =>{
      const action = {
        type:'[TODO] delete todo',
        payload: todo
      }
      dispatch(action);
  }
  return (
      <>
          <h1>TodoApp: 10 <small>Pendientes: 2</small> </h1>
          <hr />
          <div className="row">
              <div className="col-7">
                  <TodoList todos={todos} handleDelete={handleDelete}/>
              </div>
              <div className="col-5">
                 <h4>Agregar To do</h4>
                 <hr />
                 <TodoAdd handleNewTodo={ handleNewTodo }/>
              </div>
          </div>
      </>
  )
}
