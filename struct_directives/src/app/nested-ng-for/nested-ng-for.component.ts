import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-ng-for',
  templateUrl: './nested-ng-for.component.html',
  styleUrls: ['./nested-ng-for.component.css']
})
export class NestedNgForComponent implements OnInit {

  constructor() { }
  name = false
  ngOnInit(): void {
  }
  categories = [
    {
      name:"Fruits",
      products : ["Mango"," Banana","Grapes","Papaya"]
    },
    {
     name:"Animals",
     products:["Horse","Elephant","Tiger"]
    },
    {
      name:"Girls",
      products:["Maekup","SkinCare","Shampo","EyeCare"]
    }
  ]
  submit() {
    this.name = !this.name
  }

}
