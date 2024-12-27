import { TodoItem } from "./TodoItem"

export const TodoList = ({todos=[], handleDelete, handleToggleTodo}) => {
  return (
      <ul className="list-group">
          {
              todos.map(todo => (
                  <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    handleDelete={handleDelete}
                    handleToggleTodo={handleToggleTodo}
                  />
              ))
          }
      </ul>
  )
}
