import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() { }

  completeItem() {
    this.item.completed = !this.item.completed;
    this.update.emit(this.item);
  }

  removeItem() {
    this.remove.emit(this.item);
  }

}
