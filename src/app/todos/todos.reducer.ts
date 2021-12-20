import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import {
  crearTodo,
  editarTodo,
  eliminarTodo,
  limpiarCompletados,
  toggleAll,
  toggleTodo,
} from './todos.actions';

export const todosFeatureKey = 'todos';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Buscar las gemas el infinito'),
  new Todo('Resucitar a Iron man'),
];

export const todosReducer = createReducer(
  initialState,
  on(crearTodo, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggleTodo, (state, { id }) =>
    state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completado: !todo.completado };
      } else {
        return todo;
      }
    })
  ),
  on(editarTodo, (state, { id, texto }) =>
    state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, texto };
      } else {
        return todo;
      }
    })
  ),
  on(eliminarTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(toggleAll, (state, { completado }) =>
    state.map((todo) => ({ ...todo, completado }))
  ),
  on(limpiarCompletados, (state) => state.filter((todo) => !todo.completado))
);
