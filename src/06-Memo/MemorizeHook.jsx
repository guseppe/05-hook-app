import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const HeavyStuff = (iterationNumber) => {
    for(let i = 0; i < iterationNumber; i++){
        console.log('Ahi vamos');
    }
    return `${iterationNumber} iteraciones realizadas`;
}
/**
 * Example component that demonstrates the use of the useMemo hook.
 * The component displays a counter and a button to increment it.
 * Additionally, it displays a button to show or hide the counter.
 * The counter is only re-rendered when the show flag changes.
 */
export const MemorizeHook = () => {
    const {counter, increment} = useCounter(4000);
    const [show, setShow] = useState(true);

const memorizedValue = useMemo(() => HeavyStuff(counter), [counter]);
  return (
      <>
          <h1>Counter <small>{counter}</small></h1>
          <hr/> 
          <h1>{memorizedValue}</h1>
          <button className="btn btn-primary" onClick={() => increment()}>
              +1
          </button>
          <button onClick={() => setShow(!show)} className="btn btn-outline-primary">Show/Hide - {JSON.stringify(show)}</button>
      </>
  )
}
