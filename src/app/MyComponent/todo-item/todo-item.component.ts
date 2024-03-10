import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Todo } from '../todos/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggred")
  }
  onCheckboxClick(todo){
    console.log(todo)
    this.todoCheckbox.emit(todo);

  }
  
}
