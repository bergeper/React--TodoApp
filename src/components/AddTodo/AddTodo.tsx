import { TodosDispatchContext } from '../../contexts/TodosDispatchContext';
import { useState, FormEvent, ChangeEvent, useContext } from 'react';
import { ActionType } from '../../reducers/TodosReducer';
import './AddTodo.scss';
import { Heading } from '../Heading/Heading';

export const AddTodo = () => {
  const dispatch = useContext(TodosDispatchContext);
  const [inputFromUser, setInputFromUser] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputFromUser(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: ActionType.ADD, payload: inputFromUser });
    setInputFromUser('');
  };

  return (
    <>
      <Heading heading='Add Todo'></Heading>
      <form onSubmit={handleSubmit} className='addTask'>
        <input
          type='text'
          value={inputFromUser}
          onChange={handleInput}
          className='addTask__input'
        ></input>
        <button className='addTask__btn'>Add Task</button>
      </form>
    </>
  );
};
