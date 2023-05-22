import { Todo } from '../models/Todo';

export interface IAction<T> {
  type: ActionType;
  payload: T;
}

export enum ActionType {
  ADD,
  TOGGLE,
  REMOVE,
}

export const TodosReducer = <T>(todos: Todo[], action: IAction<T>) => {
  switch (action.type) {
    case ActionType.ADD:
      console.log(typeof action.payload);
      return [
        ...todos,
        new Todo(
          new Date().getTime(),
          String(action.payload),
          new Date(),
          false
        ),
      ];
    case ActionType.TOGGLE:
      console.log(typeof action.payload);
      return todos.map((todo) => {
        if (todo.id === Number(action.payload)) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      });
    case ActionType.REMOVE:
      console.log(typeof action.payload);
      return todos.filter((todo) => todo.id !== Number(action.payload));

    default:
      throw new Error('Something went wrong');
  }
};
