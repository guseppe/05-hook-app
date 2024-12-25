const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false
}];

const todoReducer = (state = initialState, action) => {
    if(action?.type === '[TODO] Add todo'){
        return [...state, action.payload];  //no mutar el state con push nunca
    }
    return state;
}

let todos = todoReducer();
// console.log(todos);

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

const addTodoAction = {
    type: '[TODO] Add todo',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);
console.log({state: todos});
