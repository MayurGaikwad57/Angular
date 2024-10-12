import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-directives',
  templateUrl: './struct-directives.component.html',
  styleUrls: ['./struct-directives.component.css']
})
export class StructDirectivesComponent implements OnInit {
    isPresent = false
    isRendered = false
    inputName:string = " " 
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.isRendered = !this.isRendered
    console.log(this.inputName)
  }

}
