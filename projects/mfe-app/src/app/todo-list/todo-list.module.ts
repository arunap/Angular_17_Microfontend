import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TodoListComponent }]),
  ],
})
export class TodoListModule {}
