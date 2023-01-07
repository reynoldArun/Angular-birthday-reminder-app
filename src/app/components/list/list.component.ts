import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() list:any;
  @Output() UpdateLength = new EventEmitter<number>();
  
  
  DeletePerson(person_id:number) {
    let newList = this.list.filter((data:any) => data.id !== person_id)
    this.list = newList;
    this.UpdateLength.emit(newList)
  }

}


