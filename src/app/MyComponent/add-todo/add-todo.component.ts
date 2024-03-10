import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todos/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  title:string;
  desc:string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();


  onSubmit(){
    const todo = {
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }

}
