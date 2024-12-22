import { memo } from "react";

export const ShowIncrement = memo(({increment}) => {
  console.log('Me volvi a dibujar'); //memo no funciona porque se la funcion se generada cada vez y siempre es diferente
  return (
    <button 
        className="btn btn-primary"
        onClick={
            () =>{
                increment(3);
            } 
        }>
        Incrementar
    </button>
  )
})
