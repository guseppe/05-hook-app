
export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] Add todo':
        return [
          ...initialState,
          action.payload
        ];
    case '[TODO] delete todo':
        return initialState.filter(todo => todo.id != action.payload.id);
    case '[TODO] toggle todo':
        return initialState.map(todo => {
          if(todo.id === action.payload.id){
            todo.done = !todo.done;
          }
          return todo;
        });
    default:
        return initialState;
  } 
}
