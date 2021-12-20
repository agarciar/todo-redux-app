import { createAction, props } from '@ngrx/store';

export type FiltrosVarios = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction(
  '[Filtro] Set filtro',
  props<{ filtro: FiltrosVarios }>()
);

