import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
     const onInputChange = (event) =>{
       const {value, name} = event.target;
       setFormState({...formState, [name]: value}) 
     }
     return {

        ...formState,
        onInputChange
     }
}
