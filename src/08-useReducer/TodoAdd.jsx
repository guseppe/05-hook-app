import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({handleNewTodo}) => {
  //const [inputValue, setInputValue] = useState('');
//   const onInputChange = ({target}) =>{
//     setInputValue(target.value);
//   }
  const {onInputChange, onResetForm, descriptionInput} = useForm({descriptionInput:''});
  const onSubmit = (event)=>{
    event.preventDefault();
    if(descriptionInput.length <= 1 ) return;
    handleNewTodo({
        id: new Date().getTime(),
        description: descriptionInput,
        done: false
    });
    onResetForm();
  }
  return (
      <form onSubmit={ onSubmit }>
          <input type="text"
              placeholder="Qué hay que hacer?"
              className="form-control"
              onChange={ onInputChange }
              value={descriptionInput}
              name='descriptionInput'
          />
          <button
              type="submit"
              className="btn btn-primary mt-2"
          >
              Agregar
          </button>
      </form>
  )
}
