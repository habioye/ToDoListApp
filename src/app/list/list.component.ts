import { Component } from '@angular/core';
import { NgForm, FormsModule, FormBuilder } from '@angular/forms';
import { ListitemComponent } from '../listitem/listitem.component';

// import { Guid } from "guid-typescript";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  current = 0;
  inputValue = "";
  items:any []; 
  id = 1;
  // stringArray : [string][string] | undefined;

  // checkoutForm = this.formBuilder
  task = {
    name: ''
  };
  // curr = any
  constructor(private formBuilder: FormBuilder) {
    this.items = []
  }
  
  onSubmit(input: NgForm)  {
    // let todo = new Todo(Guid.create(), input.value.title, false);
    // this.todos.push(todo);
    // curr = new ListComponent();
    // console.log(input.value.title,"cooked");
    let add = {string: input.value.title,number: this.id};
    console.log(add.string);

    this.items.push(
      {string: input.value.title,
        number: this.id}
      // add
    );
    this.id+=1;


    
    // this.items.push(this.formBuilder.group({name:''}).value());
    // this.items.push(new ListitemComponent());

  }
  delete() {
throw new Error('Method not implemented.');
}
}
