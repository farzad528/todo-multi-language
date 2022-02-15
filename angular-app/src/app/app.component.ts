import { Component, OnInit } from '@angular/core';
import { ToDo } from './todo-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angular-app';
  textInput!: string;
  todoList: string[] = [];
  existingTodos: string[] | undefined;

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.textInput);
    // push vs concat
    this.todoList = this.todoList.concat(this.textInput)
    localStorage.setItem("token", JSON.stringify(this.todoList));
  }

}