import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('pruebas en todoReduce', () => { 
    const initialState = [{
        id: 1,
        description: 'demo todo',
        done: false
    }];
    test('debe regresar el estado inicial', () => {  
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });
    test('debe agregar un todo', () => { 
        const action = {
            type: '[TODO] Add todo',
            payload: {
                id: 2,
                description: 'nueva tarea',
                done: false
            }
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
        //expect(newState).toStrictEqual([...initialState, action.payload]);
    });
    test('debe elminar un todo', () => {  
        const action = {
            type: '[TODO] delete todo',
            payload: initialState[0]
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });
    test('debe realizar el toggle del todo', () => {  
        const action = {
            type: '[TODO] toggle todo',
            payload: initialState[0]
        }
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);
    });
});