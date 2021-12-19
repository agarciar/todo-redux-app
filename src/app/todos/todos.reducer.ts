import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crearTodo, editarTodo, toggleTodo } from './todos.actions';

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
  )
);
