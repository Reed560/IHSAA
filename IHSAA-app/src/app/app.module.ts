import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolYearDDComponent } from './school-year-dd/school-year-dd.component';
import { GenderDDComponent } from './gender-dd/gender-dd.component';
import { SportDDComponent } from './sport-dd/sport-dd.component';
import { ClassSizeDDComponent } from './class-size-dd/class-size-dd.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolYearDDComponent,
    GenderDDComponent,
    SportDDComponent,
    ClassSizeDDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
