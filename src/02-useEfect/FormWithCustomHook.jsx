import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {
  const formFields = {
    username: '',
    email: '',
    password: ''
  }
  const {onInputChange, username, email, password } = useForm(formFields)
 
  useEffect(()=>{
    //console.log('email changed');
  }, [email]);
  return (
    <>
        <h1>Formulario con custom hook</h1>
        <hr/>
        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        ></input>
        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="guseppe@google.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        ></input>
         <input 
            type="password" 
            className="form-control mt-2"
            placeholder="contraseña"
            name="password"
            value={ password }
            onChange={ onInputChange }
        ></input>

    </>
  )
}
