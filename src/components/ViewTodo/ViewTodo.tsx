import { TodosDispatchContext } from '../../contexts/TodosDispatchContext';
import { Todo } from '../../models/Todo';
import { useContext } from 'react';
import { ActionType } from '../../reducers/TodosReducer';
import './ViewTodo.scss';

interface ITodoProps {
  todo: Todo;
}

export const ViewTodo = ({ todo }: ITodoProps) => {
  const dispatch = useContext(TodosDispatchContext);

  const htmlForTodo = (
    <div
      onClick={() => {
        dispatch({ type: ActionType.TOGGLE, payload: todo.id });
      }}
      className='todo'
    >
      <input type='checkbox' checked={todo.done} />
      <span className={todo.done ? 'todo__task--done' : 'todo__task'}>
        {todo.task}
      </span>
      <button
        onClick={() => {
          dispatch({ type: ActionType.REMOVE, payload: todo.id });
        }}
        className='todo__removeBtn'
      >
        Remove
      </button>
    </div>
  );

  return <>{htmlForTodo}</>;
};
