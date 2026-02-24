import { ButtonInput } from '../buttonInput';
import { TextInput } from '../textInput';
import './to-do-form.style.css';




export function ToDoForm( {onSubmit} ) {
  return (
    <form action={onSubmit} className='to-do-form'>
      <TextInput  />
      <ButtonInput />
    </form>
  );
}

