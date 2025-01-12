import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"
import { act } from "react";
describe('Pruebas en useForm', () => { 
    const initialForm = {
        name:'guseppe',
        email:'guseppe@gmail.com'
    };
    test('Debe regresar los valores por defecto', () => { 
        const { result } = renderHook(()=>useForm(initialForm));
        expect(result.current).toEqual(
            {
                name: initialForm.name,
                email: initialForm.email,
                formState: initialForm,
                onInputChange: expect.any(Function),
                onResetForm: expect.any(Function)
            }
        )
     });
     test('Debe cambiar el nombre del formulario', () => { 
        const { result } = renderHook(()=>useForm(initialForm));
        const newValue = { value:'Hola mundo', name:'name' };
        act( () => result.current.onInputChange( { target: newValue }) );
        expect(result.current.name).toBe(newValue.value);
      });
    test('Debe de resetear', () => { 
        const { result } = renderHook(()=>useForm(initialForm));
        const newValue = { value:'Hola mundo', name:'name' };
        act( () => {
            result.current.onInputChange( { target: newValue });
            result.current.onResetForm();
        });
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState).toBe(initialForm);
     });
 })