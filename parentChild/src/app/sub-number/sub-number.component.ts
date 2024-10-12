import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sub-number',
  templateUrl: './sub-number.component.html',
  styleUrls: ['./sub-number.component.css']
})
export class SubNumberComponent implements OnInit {

@Input() passdata:any;
@Input() markData : any;
@Input() parameterPass : any;
@Output() dataupdateevent = new EventEmitter<string>();
//  after input function  the paramter that you have defined use in your parent component to bind values 
// <app-sub-number [passdata]="data"></app-sub-number>
listArray = [{"name":"Mayur","mark":"90"}]

  constructor() { }

  ngOnInit(): void {
  }
  addElement(obj:any) {
   this.listArray.push(obj);
   return obj.name +" is Added"
  }
  
}
