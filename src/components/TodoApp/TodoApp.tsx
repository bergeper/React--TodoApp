import { useReducer } from 'react';
import { TodosReducer } from '../../reducers/TodosReducer';
import { TodosContext } from '../../contexts/TodosContext';
import { TodosDispatchContext } from '../../contexts/TodosDispatchContext';
import { AddTodo } from '../AddTodo/AddTodo';
import { Todos } from '../Todos/Todos';

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodosReducer, []);

  return (
    <>
      <TodosContext.Provider value={todos}>
        <TodosDispatchContext.Provider value={dispatch}>
          <AddTodo></AddTodo>
          <Todos></Todos>
        </TodosDispatchContext.Provider>
      </TodosContext.Provider>
    </>
  );
};
