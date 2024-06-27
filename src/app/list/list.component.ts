import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
// import { Guid } from "guid-typescript";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  current = 0;
  inputValue = "";
  onSubmit(input: NgForm)  {
    // let todo = new Todo(Guid.create(), input.value.title, false);
    // this.todos.push(todo);


  }
}
