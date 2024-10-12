import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-directives',
  templateUrl: './use-directives.component.html',
  styleUrls: ['./use-directives.component.css']
})
export class UseDirectivesComponent implements OnInit {
   title:string = " Code Mayur "
   Name :string = "elvish"
   user:string = "Mayur Legend"
   date = Date()
   pi = 3.1420567
  

   User = {
    name: " Mayur",
    Id: "111"
   }

   getName(item:string) {
    return item.toUpperCase()
   }
  constructor() { }

  ngOnInit(): void {
  }

}
