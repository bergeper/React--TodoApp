import { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContext';
import { ViewTodo } from '../ViewTodo/ViewTodo';
import './Todos.scss';
import { Heading } from '../Heading/Heading';
export const Todos = () => {
  const todos = useContext(TodosContext);
  return (
    <>
      <Heading heading='Tasks'></Heading>
      <div className='todos'>
        {todos.map((todo) => (
          <ViewTodo todo={todo}></ViewTodo>
        ))}
      </div>
    </>
  );
};
