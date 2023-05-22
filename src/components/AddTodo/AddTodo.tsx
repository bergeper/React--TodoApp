import { TodosDispatchContext } from '../../contexts/TodosDispatchContext';
import { useState, FormEvent, ChangeEvent, useContext } from 'react';
import { ActionType } from '../../reducers/TodosReducer';

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
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputFromUser} onChange={handleInput}></input>
        <button>Add Task</button>
      </form>
    </>
  );
};
