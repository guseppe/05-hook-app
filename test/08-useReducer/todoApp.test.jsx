import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos");
describe('pruebas en <TodoApp/>', () => { 
   useTodos.mockReturnValue({
    todos: [
        {id: 1, description: 'todo #1', done: false},
        {id: 2, description: 'todo #2', done: false}
    ], 
    allTodosCount: 2, 
    pendingTodosCount: 2,  
    handleDelete: jest.fn(), 
    handleToggleTodo: jest.fn(), 
    handleNewTodo: jest.fn() 
   });
   test('debe de mostrar el componente correctamente', () => { 
      
      render(<TodoApp/>);
      expect(screen.getByText("todo #1")).toBeTruthy();
      expect(screen.getByText("todo #2")).toBeTruthy();
      expect(screen.getByRole("textbox").name).toBe("descriptionInput");
      expect(screen.getByRole("textbox").className).toBe("form-control");
      expect(screen.getByText("Pendientes: 2")).toBeTruthy();
   }); 
});