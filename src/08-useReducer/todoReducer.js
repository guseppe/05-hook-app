
export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] Add todo':
        return [
          ...initialState,
          action.payload
        ];
    case '[TODO] delete todo':
        return initialState.filter(todo => todo.id != action.payload.id);
    default:
        return initialState;
  } 
}
