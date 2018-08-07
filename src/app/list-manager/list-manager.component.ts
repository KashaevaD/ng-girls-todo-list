import { Component, OnInit } from '@angular/core';

import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  todoList: TodoItem[];

  constructor(
    private _todoListService: TodoListService
  ) { }

  ngOnInit() {
    this.todoList = this._todoListService.getTodoList();
  }

  addItem(title: string) {
    this._todoListService.addItem({ title });
  }

  removeItem(item: TodoItem) {
    this._todoListService.deleteItem(item);
  }

  updateItem(item: TodoItem) {
    console.log(item)
    this._todoListService.updateItem(item);
  }
}
