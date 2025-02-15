import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { LoginPage } from '../../src/09-useContext/LoginPage'

describe('Pruebas en <LoginPage/>', () => { 
    const user = {
        id:123,
        name:'guseppe rodriguez',
        email:'guseppe@google.com'
    }
    
    test('debe de mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value={{user:null}}>
                <LoginPage/>
            </UserContext.Provider>
        )
        const title = screen.getByRole('heading')
        expect(title.innerHTML).toBe('Login Page')
    })
    test('debe de llamar setUser cuando se clickea el boton', () => { 
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{user:null, setUser:setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        );
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(setUserMock).toHaveBeenCalledWith(user);
    })
})