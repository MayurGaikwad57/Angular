import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';


const materiallComponents = [
  MatFormFieldModule,
  MatMenuModule,
  MatDialogModule
]




@NgModule({
  imports: [materiallComponents],
  exports:[materiallComponents]
})
export class MaterialModule { }
