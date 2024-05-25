import { Component, OnInit } from '@angular/core';
import { Todo } from './models/Todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  todo: Todo[] = [
    { id: 1, name: 'Buy groceries', createdAt: new Date() },
    { id: 2, name: 'Finish project report', createdAt: new Date() },
    { id: 3, name: 'Call the plumber', createdAt: new Date() },
  ];
  newTodoName: string = '';
  nextId: number = this.todo.length+1;

  addTodo() {
    if (this.newTodoName !== undefined)
      this.todo = [
        ...this.todo,
        { id: this.nextId++, name: this.newTodoName, createdAt: new Date() },
      ];
  }

  removeTodo(event: Event, id: number) {
    event.preventDefault();
    this.todo = this.todo.filter((d) => d.id !== id);
  }

  editTodo(){}

  ngOnInit(): void {}
}
