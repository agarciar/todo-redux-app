import { Pipe, PipeTransform } from '@angular/core';
import { FiltrosVarios } from '../filtro/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(todos: Todo[] | null, filtro: FiltrosVarios): Todo[] | null {
    if (!todos) return todos;
    switch (filtro) {
      case 'completados':
        return todos.filter((todo) => todo.completado === true);
      case 'pendientes':
        return todos.filter((todo) => todo.completado !== true);
      default:
        return todos;
    }
  }
}
