import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crearTodo } from './todos.actions';

export const todosFeatureKey = 'todos';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Buscar las gemas el infinito'),
  new Todo('Resucitar a Iron man')
];

export const todosReducer = createReducer(
  initialState,
  on(crearTodo, (state, { texto }) => [...state, new Todo(texto)])
);
