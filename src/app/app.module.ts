import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { StorageService } from './services/storage.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListService } from './services/todo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    ListManagerComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StorageService,
    TodoListService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
