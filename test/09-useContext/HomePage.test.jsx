import { render, screen } from "@testing-library/react";
import {HomePage} from '../../src/09-useContext/HomePage';
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('pruebas en <HomePage/>', () => { 
    const user = {
        id: 1,
        name: "Guseppe"
    }
    test('debe de mostrar el componente sin el usuario', () => { 
       render(
        <UserContext.Provider value={{user:null}}>
            <HomePage/>
        </UserContext.Provider>
       );    
       const preTag = screen.getByLabelText('preTag');
       expect(preTag.innerHTML).toBe('null');
    });
    test('debe de mostrar el componente con el usuario', () => { 
        render(
        <UserContext.Provider value={{user:user}}>
            <HomePage/>
        </UserContext.Provider>
        );
        const userNameLabel = screen.getByLabelText('username');
        expect(userNameLabel.innerHTML).toBe('Guseppe');
        const preTag = screen.getByLabelText('preTag');
        expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());
    });
});