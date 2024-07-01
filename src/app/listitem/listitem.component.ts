import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrl: './listitem.component.css'
})
export class ListitemComponent {
    @Input() item: {name: string} = {name: ''};
    
}
