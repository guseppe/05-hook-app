import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');
describe('Pruebas en multiple custom hooks', () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    }); 
    beforeEach(()=>jest.clearAllMocks()); //resetear por cada prueba
    test('Debe de mostrar el componente por defector', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false
        });
        render(<MultipleCustomHooks/>);
        //screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText('Información de pokemón'));
        const nextButton = screen.getByRole('button', {name:'Siguiente'});
        expect(nextButton.disabled).toBeTruthy();
        console.log(nextButton.disabled);
    });
    test('Debe de mostrar un pokemon', () => { 
        useFetch.mockReturnValue({
            data: {
                id: 2,
                name: 'ivysaur',
                sprites: {
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                    front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
                    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
                    back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png",
                }
            },
            isLoading: false,
            hasError: null
        });
        render(<MultipleCustomHooks/>);
        screen.debug(); 
        expect(screen.getAllByAltText('ivysaur').length).toBe(4);
        const nextButton = screen.getByRole('button', { name:'Siguiente' });
        expect(nextButton.disabled).toBeFalsy();
    });
    test('Debe llamar la funcion de incrementar', () => { 
        useFetch.mockReturnValue({
            data: {
                id: 2,
                name: 'ivysaur',
                sprites: {
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                    front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
                    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
                    back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png",
                }
            },
            isLoading: false,
            hasError: null
        });
        
        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button', { name:'Siguiente' });
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();
    });  
})