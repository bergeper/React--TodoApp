import { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContext';
import { ViewTodo } from '../ViewTodo/ViewTodo';

export const Todos = () => {
  const todos = useContext(TodosContext);
  return (
    <>
      <div>
        {todos.map((todo) => (
          <ViewTodo todo={todo}></ViewTodo>
        ))}
      </div>
    </>
  );
};
