import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appElement]'
})
export class ElementDirective {
  @Input() name = " ";

  constructor(private el:ElementRef) {
    
   }
   ngOnInit() {
    if(this.name) {
      alert("custom directive generation")
     this.el.nativeElement.innerText = this.name;  
     this. el. nativeElement.style.color="red";
     this.el.nativeElement.style.backgroundColor="yellow";
     
     }
     this.el.nativeElement.style.color= "red"
    }
    
    
}
