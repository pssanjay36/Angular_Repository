import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  readonly data=[
    {
      projectNo:1,
      title:"Sinnan Stores"
    },
    {
      projectNo:2,
      title:"Library"
    },
    {
      projectNo:3,
      title:"Tic Tac Toe"
    }
  ]
 
  itemList:any[]=this.data;
}
