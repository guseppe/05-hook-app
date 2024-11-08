import { useRef } from "react";


export const FocusScreen = () => {
  const inputRef = useRef();
 
  const onClick = ()=>{
    inputRef.current.select();
    //console.log(inputRef);
    //document.querySelector('input').select();
  }
  return (
    <>
    <h1>FocusScreen</h1>
    <hr/>
    <input 
        type='text'
        placeholder='Ingrese un nombre' 
        className='form-control'
        ref={inputRef}
    />
    <button className='btn btn-primary mt-2' onClick={onClick}>Set Focus</button>
    </>
  )
}
