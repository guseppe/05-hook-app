import { render, screen } from "@testing-library/react"
import { Main } from '../../src/09-useContext/Main';
import { MemoryRouter } from "react-router-dom";
describe('pruebas en <MainApp/>', () => { 
    test('debe de mostrar el componente por defecto', () => { 
        render(
            <MemoryRouter>
                <Main/>
            </MemoryRouter>
        )
        expect(screen.getByText('Login Page')).toBeTruthy();
        //screen.debug();
    })
    test('debe de mostrar el componente por home', () => { 
        render(
            <MemoryRouter initialEntries={['/home']}>
                <Main/>
            </MemoryRouter>
        )
        expect(screen.getByText('Home Page')).toBeTruthy();
        //screen.debug();
    })
})