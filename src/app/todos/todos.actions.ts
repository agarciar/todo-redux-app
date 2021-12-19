import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
  '[Todo] Crear todo',
  props<{ texto: string }>()
);
export const toggleTodo = createAction(
  '[Todo] Toggle',
  props<{ id: number }>()
);

export const editarTodo = createAction(
  '[Todo] Editar',
  props<{ id: number; texto: string }>()
);
