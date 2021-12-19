import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crearTodo } from './todos.actions';

export const todosFeatureKey = 'todos';

export const initialState: Todo[] = [];

export const reducer = createReducer(
  initialState,
  on(crearTodo, (state, { texto }) => [...state, new Todo(texto)])
);
