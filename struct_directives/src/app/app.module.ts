import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructDirectivesComponent } from './struct-directives/struct-directives.component';
import { ThenComponent } from './then/then.component';
import { FormsModule } from '@angular/forms';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { NestedNgForComponent } from './nested-ng-for/nested-ng-for.component';
import { ElementDirective } from './element.directive';
import { UseDirectivesComponent } from './use-directives/use-directives.component';
import { UsdInrPipe } from './usd-inr.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    StructDirectivesComponent,
    ThenComponent,
    ForLoopComponent,
    NestedNgForComponent,
    ElementDirective,
    UseDirectivesComponent,
    UsdInrPipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
