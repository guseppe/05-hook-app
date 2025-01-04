import React from 'react'
import { UserContext } from './UserContext';
const user = {
    id:123,
    name:'guseppe rodriguez',
    email:'guseppe@google.com'
};
export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{hola:'mundo', user:user}}>
      {children}
    </UserContext.Provider>
  )
}
