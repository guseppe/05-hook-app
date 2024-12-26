import { TodoItem } from "./TodoItem"

export const TodoList = ({todos=[], handleDelete}) => {
  return (
      <ul className="list-group">
          {
              todos.map(todo => (
                  <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete}/>
              ))
          }
      </ul>
  )
}
