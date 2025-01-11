import { renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"
import { act } from "react";

describe('Pruebas en useCounter', () => {
    test('debe de retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;
        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    })
    test('debe de generar el counter con el valor de 100', () => { 
        const {result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
    })
    test('debe de incrementar el contador', () => { 
        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;
        act(() => increment(2));
        //act(() => increment(2)); //para hacer esta prueba hay que modificar el increment del hook y decirle que incremente el valor (current) => current + value
        console.log(result.current.counter);
        expect(result.current.counter).toBe(12);
    })
    test('debe de decrementar el contador', () => { 
        const { result } = renderHook(() => useCounter());
        const {  decrement } = result.current;
        act(() => decrement(2));
        expect(result.current.counter).toBe(8);
    })
    test('debe de resetear el contador', () => { 
        const { result } = renderHook(() => useCounter());
        const { reset, increment } = result.current;
        act(() =>{ //no tengo que modificar el hook para llamar las 2 funciones porque el reset pone el estado inicial
            increment(2);
            reset();
        });
        // act(() => increment(2));
        // act(() => reset());
        expect(result.current.counter).toBe(10);
    })
})