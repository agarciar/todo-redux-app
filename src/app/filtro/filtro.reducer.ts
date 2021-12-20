import { createReducer, on } from '@ngrx/store';

import { FiltrosVarios, setFiltro } from './filtro.actions';

export const initialState: FiltrosVarios = 'todos';

export const filtroReducer = createReducer(
  initialState as FiltrosVarios,
  on(setFiltro, (state, { filtro }) => filtro)
);
