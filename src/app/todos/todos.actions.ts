import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction('[Todo] Crear todo', props<{texto:string}>());
