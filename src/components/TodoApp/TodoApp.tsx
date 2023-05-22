import { useReducer } from 'react';
import { TodosReducer } from '../../reducers/TodosReducer';
import { TodosContext } from '../../contexts/TodosContext';
import { TodosDispatchContext } from '../../contexts/TodosDispatchContext';
import { AddTodo } from '../AddTodo/AddTodo';
import { Todos } from '../Todos/Todos';
import './TodoApp.scss';

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodosReducer, []);

  return (
    <>
      <TodosContext.Provider value={todos}>
        <TodosDispatchContext.Provider value={dispatch}>
          <main className='container'>
            <section className='content'>
              <AddTodo></AddTodo>
              <Todos></Todos>
            </section>
          </main>
        </TodosDispatchContext.Provider>
      </TodosContext.Provider>
    </>
  );
};
