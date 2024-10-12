import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
     username: 'guseppe',
     email: 'guseppe1988@gmail.com'
  });
  const { username, email } = formState;
  const onInputChange = (event) =>{
    const {value, name} = event.target;
    // if(name === 'username'){
    //     setFormState({...formState, username: value})
    // }
    // else{
    //     setFormState({...formState, email: value})
    // }
    setFormState({...formState, [name]: value}) //propiedad computada
  }
  useEffect(()=>{
    //console.log('use effect called');
  }); //si le paso un [] como dependencias al segundo argumento solo se ejecuta la primera vez que se dibuja el componente
  useEffect(()=>{
    //console.log('formState changed');
  }, [formState]);
  useEffect(()=>{
    //console.log('email changed');
  }, [email]);
  return (
    <>
        <h1>Simple Form</h1>
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
        {
            (username === 'guseppe2') && <Message/>
        }

    </>
  )
}
