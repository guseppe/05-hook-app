
export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'ABC':
        throw new Error(`Action ${action.type} no implementada`);
     
  
    default:
        return initialState;
  } 
}
