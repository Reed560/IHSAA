import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SchoolYearDDComponent } from './school-year-dd/school-year-dd.component';
import { GenderDDComponent } from './gender-dd/gender-dd.component';
import { SportDDComponent } from './sport-dd/sport-dd.component';
import { ClassSizeDDComponent } from './class-size-dd/class-size-dd.component';
import { DatabaseComponentComponent } from './database-component/database-component.component';
import { AlgorithmTYPESCRIPTComponent } from './algorithm-typescript/algorithm-typescript.component';
import { SectionalGroupComponent } from './sectional-group/sectional-group.component';


@NgModule({
  declarations: [
    AppComponent,
    SchoolYearDDComponent,
    GenderDDComponent,
    SportDDComponent,
    ClassSizeDDComponent,
    DatabaseComponentComponent,
    AlgorithmTYPESCRIPTComponent,
    SectionalGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }