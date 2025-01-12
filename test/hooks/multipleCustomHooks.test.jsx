import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
describe('Pruebas en multiple custom hooks', () => {
    test('Debe de mostrar el componente por defector', () => {
        render(<MultipleCustomHooks/>);
        screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText('Información de pokemón'));
        const nextButton = screen.getByRole('button', {name:'Siguiente'});
        expect(nextButton.disabled).toBeTruthy();
        console.log(nextButton.disabled);
    });
})