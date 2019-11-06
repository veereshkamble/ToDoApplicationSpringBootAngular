import { Component, OnInit } from '@angular/core';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn to play the Violin', false, new Date()),
    new Todo(2, 'Learn AngularJS', false, new Date()),
    new Todo(3, 'Learn SpringBoot', false, new Date()),
    new Todo(4, 'Visit India', true, new Date())
    /* {id: 1, description: 'Learn to play the Violin'},
    {id: 2, description: 'Learn AngularJS'},
    {id: 3, description: 'Learn SpringBoot'} */
  ]
  todo = {
    id: 1,
    description: 'Learn to play the Violin'
  }
  constructor() { }

  ngOnInit() {
  }

}
