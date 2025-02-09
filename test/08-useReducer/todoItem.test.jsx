import { fireEvent, render, screen } from "@testing-library/react";
import {TodoItem} from '../../src/08-useReducer/TodoItem';

describe('Pruebas en <TodoItem />', () => {
  const todo = {
    id: 1,
    description: 'piedra del alma',
    done: false
  };
  const handleDeleteMock = jest.fn();
  const handleToggleTodoMock = jest.fn();
  
  beforeEach(() => jest.clearAllMocks());
  test('debe mostrar el todo pendiente de completar', () => {
    render(<TodoItem 
        todo = { todo } 
        handleToggleTodo = { handleToggleTodoMock } 
        handleDelete = { handleDeleteMock }
        />
    );
    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
    const spanElement = screen.getByLabelText('span');  
    expect(spanElement.className).toBe('align-self-center ');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });

  test('debe mostrar el todo completado', () => { 
    todo.done = true;
    render(<TodoItem 
        todo = { todo } 
        handleToggleTodo = { handleToggleTodoMock } 
        handleDeleteTodo = { handleDeleteMock }
        />
    );
    const spanElement = screen.getByLabelText('span');  
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('el span debe de llamar en handleToggleTodo cuando se le hace click', () => { 
    render(<TodoItem 
      todo = { todo } 
      handleToggleTodo = { handleToggleTodoMock } 
      handleDelete = { handleDeleteMock }
      />
    );
    const spanElement = screen.getByLabelText('span');  
    fireEvent.click(spanElement);
    //expect(handleToggleTodoMock).toHaveBeenCalled();
    expect(handleToggleTodoMock).toHaveBeenCalledWith(todo);
  });
  test('debe llamar handleDelete cuando se hace click en borrar', () => { 
    render(<TodoItem 
      todo = { todo } 
      handleToggleTodo = { handleToggleTodoMock } 
      handleDelete = { handleDeleteMock }
      />
    );
    const btnDelete = screen.getByRole('button');
    fireEvent.click(btnDelete);
    expect(handleDeleteMock).toHaveBeenCalledWith(todo);
  });
});
