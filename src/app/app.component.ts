import { Component } from '@angular/core';
import list from '../assets/data.json'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any[] = list
  length:number = list.length

  ClearItems() {
    this.data = []
    this.length = this.data.length
  }

  Refresh() {
    this.data = list
    this.length = this.data.length
  }


  OnLengthChange(listt:any) {
    this.length = listt.length
    this.data = listt
    
  }
}
