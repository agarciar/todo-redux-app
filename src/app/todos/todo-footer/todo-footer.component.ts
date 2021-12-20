import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { FiltrosVarios, setFiltro } from 'src/app/filtro/filtro.actions';
import { limpiarCompletados } from '../todos.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filtroActual: FiltrosVarios = 'todos';
  filtros: FiltrosVarios[] = ['todos', 'pendientes', 'completados'];
  pendientes: number = 0;
  constructor(private store: Store<AppState>) {
    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter((todo) => !todo.completado).length;
    });
  }

  ngOnInit(): void {}

  cambiarFiltro(filtro: FiltrosVarios) {
    this.store.dispatch(setFiltro({ filtro }));
  }

  limpiarCompletados() {
    this.store.dispatch(limpiarCompletados());
  }
}
