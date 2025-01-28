import { render, screen } from "@testing-library/react";
import {TodoItem} from '../../src/08-useReducer/TodoItem';

describe('Pruebas en <TodoItem />', () => {
  const todo = {
    id: 1,
    description: 'piedra del alma',
    done: false
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();
  
  beforeEach(() => jest.clearAllMocks());
  test('debe mostrar el todo pendiente de completar', () => {
    render(<TodoItem 
        todo = { todo } 
        onToggleTodo = { onToggleTodoMock } 
        onDeleteTodo = { onDeleteTodoMock }
        />
    );
    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
    const spanElement = screen.getByLabelText('span');  
    expect(spanElement.className).toBe('align-self-center ');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });
  
});
