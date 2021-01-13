import { Component, OnInit } from '@angular/core';

// Create Todo interface
interface Todo {
  task: string,
  completed: boolean
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  filter:string = "";

  // Create an array of Todos
  todo: Todo[] = [
    {task: "Wash dishes", completed: false},
    {task: "Do laundry", completed: false},
    {task: "Make bed", completed: true},
    {task: "Walk dog", completed: false},
    {task: "Take out garbage", completed: true}
  ]

  public newTask:string; 
  public filterString:string = "";

  completeTask = function(todo: Todo): void {
      todo.completed = true;
  }

  deleteTask = function(todo: Todo): void {
    let i = this.todo.findIndex(obj => obj.task === todo.task);
    this.todo.splice(i,1);
  }

  addToList = function(newTask): void{
    console.log("adding");
    if (this.newTask.trim() != '') { 
      let newTodo:Todo = {task: this.newTask,completed:false};
      this.todo.push(newTodo);
      this.newTask = '';
    }
  }

  getFilteredResults(): Todo[] {
    return this.todo.filter((todo => {
      return todo.task.toLowerCase().includes(this.filterString.toLowerCase());
    }));
  }


  constructor() { }

  ngOnInit(): void {
  }

}
