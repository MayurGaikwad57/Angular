
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
   let dialogRef= this.dialog.open(DialogComponent,{data:{name:'Mayur'}});
   dialogRef.afterClosed().subscribe(result => {
    console.log(`Result is : ${result}`)
   });
  }
}
