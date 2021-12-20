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

export const eliminarTodo = createAction(
  '[Todo] Eliminar',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[Todo] ToggleAll',
  props<{ completado: boolean }>()
);

export const limpiarCompletados = createAction('[Todo] Limpiar completados');
