import { useCallback, useEffect, useState } from "react"
import {ShowIncrement} from './ShowIncrement';  

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);
  const increment = useCallback(
    (value) => setCounter((c) => c + value), []
  );
  
  //otro uso es crear un efecto cuando se dispare la funcion increment y que se ejecute solo una vez
  useEffect(() => {
    increment(3);
  }, [increment]); //si no estuviera memorizada el increment se ejecutaria cada vez que se dibujara el componente
  return (
    <>
        <h1>CallBackHook: {counter}</h1>
        <hr/>
        <ShowIncrement increment={increment}/>
    </>
  )
}
