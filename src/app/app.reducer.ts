import { ActionReducerMap } from "@ngrx/store";
import { FiltrosVarios } from "./filtro/filtro.actions";
import { filtroReducer } from "./filtro/filtro.reducer";
import { Todo } from "./todos/models/todo.model";
import { todosReducer } from "./todos/todos.reducer";

export interface AppState{
    todos: Todo[];
    filtro: FiltrosVarios
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todosReducer,
    filtro: filtroReducer
}
