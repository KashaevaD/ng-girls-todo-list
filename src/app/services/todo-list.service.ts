import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';
const defaultTodoList = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private _todoList = [];

  constructor(
    private _storageService: StorageService
  ) {
    this._todoList = (this._storageService.hasData(todoListStorageKey))
      ? this._storageService.getData(todoListStorageKey)
      : defaultTodoList;
  }

  getTodoList() {
    return this._todoList;
  }

  addItem(item: TodoItem) {
    this._todoList.push(item);
    this.saveList();
  }

  updateItem(item: TodoItem) {
    this._todoList.map((_item: TodoItem) => {
      if (_item.title === item.title) {
        return item;
      }

      return _item;
    });

    console.log(this._todoList)
    this.saveList();
  }

  deleteItem(item: TodoItem) {
    const index = this._todoList.indexOf(item);
    this._todoList.splice(index, 1);
    this.saveList();
  }

  saveList() {
    this._storageService.setData(todoListStorageKey, this._todoList);
  }
}
