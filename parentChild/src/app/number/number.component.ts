import { Component, OnInit, ViewChild } from '@angular/core';
import { SubNumberComponent } from '../sub-number/sub-number.component';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {
  // 1st Declare child componentdefinition
  @ViewChild(SubNumberComponent) viewData !: SubNumberComponent 
   title = "Parent Component"
  data:number = 10;
   inputName:string = ' ';
   markInput:string = ' ';
   newObj= {"name":" ","mark":" "};
   response:any;
  constructor() { }

  ngOnInit(): void {
  }
  callData() {
    this.data = Math.floor(Math.random()*10);
  }
 
  transferData(name:any,markInput:any) {
  this.inputName = name;
  this.markInput = markInput;
  this.newObj = {"name":name,"mark":markInput};
 this.response= this.viewData.addElement(this.newObj);
  }

  updateTitle(title:any) {
    this.title = title;
  }

}
