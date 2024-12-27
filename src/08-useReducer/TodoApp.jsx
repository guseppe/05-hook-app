
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodos } from "../hooks";

export const TodoApp = () => {
  const {todos, allTodosCount, pendingTodosCount,  handleDelete, handleToggleTodo, handleNewTodo } = useTodos();
 
  return (
      <>
          <h1>TodoApp: {allTodosCount} <small>Pendientes: {pendingTodosCount}</small> </h1>
          <hr />
          <div className="row">
              <div className="col-7">
                  <TodoList 
                    todos={todos} 
                    handleDelete={handleDelete}
                    handleToggleTodo={handleToggleTodo}
                  />
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
