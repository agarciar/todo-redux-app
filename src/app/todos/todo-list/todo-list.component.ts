import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { FiltrosVarios } from 'src/app/filtro/filtro.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;
  filtroActual: FiltrosVarios = 'todos';

  constructor(private store: Store<AppState>) {
    this.todos$ = store.select('todos');
    store.select('filtro').subscribe((filtro) => (this.filtroActual = filtro));
  }

  ngOnInit(): void {}
}
