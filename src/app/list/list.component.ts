import { Component } from '@angular/core';
import { NgForm,  FormBuilder } from '@angular/forms';

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
  task = {
    name: ''
  };
  constructor(private formBuilder: FormBuilder) {
    this.items = []
  }
  
  onSubmit(input: NgForm)  {
    let add = {string: input.value.title,number: this.id};
    console.log(add.string);

    this.items.push(
      {string: input.value.title,
        number: this.id}
    );
    this.id+=1;
    this.inputValue = ""


    

  }
  delete(input:number) {
for(let i = 0; i < this.items.length;i++) {
  if (this.items[i].number == input) {
    this.items.splice(i,1);
    break;
  }
}

}
}
