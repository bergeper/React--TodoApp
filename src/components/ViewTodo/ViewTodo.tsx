import { TodosDispatchContext } from '../../contexts/TodosDispatchContext';
import { Todo } from '../../models/Todo';
import { useContext } from 'react';
import { ActionType } from '../../reducers/TodosReducer';

interface ITodoProps {
  todo: Todo;
}

export const ViewTodo = ({ todo }: ITodoProps) => {
  const dispatch = useContext(TodosDispatchContext);

  return (
    <div
      onClick={() => {
        dispatch({ type: ActionType.TOGGLE, payload: todo.id });
      }}
    >
      <input type='checkbox' checked={todo.done} />
      <span>{todo.task}</span>
      <button
        onClick={() => {
          dispatch({ type: ActionType.REMOVE, payload: todo.id });
        }}
      >
        Remove
      </button>
    </div>
  );
};
