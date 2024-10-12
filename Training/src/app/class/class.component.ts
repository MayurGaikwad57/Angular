import { Component, OnInit } from '@angular/core';
interface FormArray{
  productName:string;
  productType:string;
  productQuantity:Number;
}
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  selectedNumber =1;
  toggler=false;
  numbers:number[] =[1,2,3,4]
  forms:FormArray[] =[{
    productName:'',
    productType:'',
    productQuantity:0
  }];
  submit='Submit';
  check="Check for ngClass";
  
  onSelectionChange() {
    this.forms=[];
    for(let i =0;i<this.selectedNumber;i++){
      this.forms.push({
        productName:'',
        productType:'',
        productQuantity:0
      });
    }
    }
    onSubmit():void{
      console.log(this.forms);
    }
    getClass():string {
      if(this.toggler){
        return 'checker'
      }
      else {
        return 'product'
      }
    }
    // Alternative syntax 
    // if this.toggler ? 'checker':'product'

    classToggler():void{
      this.toggler = !this.toggler;
    }




  constructor() { }

  ngOnInit(): void {
  }

}
