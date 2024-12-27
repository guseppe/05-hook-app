
export const TodoItem = ({todo, handleDelete, handleToggleTodo}) => {

  return (
      <li className="list-group-item d-flex justify-content-between">
          <span 
            className={`align-self-center ${todo.done ? 'text-decoration-line-through': ''}`}
            onClick={()=>handleToggleTodo(todo)}
          >
            {todo.description}
          </span>
          <button 
            className="btn btn-danger" 
            onClick={()=>handleDelete(todo)}
          >
          Borrar</button>
      </li>
  )
}
