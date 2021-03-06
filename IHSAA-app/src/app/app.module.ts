import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolYearDDComponent } from './school-year-dd/school-year-dd.component';
import { GenderDDComponent } from './gender-dd/gender-dd.component';
import { SportDDComponent } from './sport-dd/sport-dd.component';
import { ClassSizeDDComponent } from './class-size-dd/class-size-dd.component';
import { DatabaseComponentComponent } from './database-component/database-component.component';
import { AlgorithmTYPESCRIPTComponent } from './algorithm-typescript/algorithm-typescript.component';
import { SectionalGroupComponent } from './sectional-group/sectional-group.component';
import { SectionalBoxesComponent } from './sectional-boxes/sectional-boxes.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AppTableComponent } from './app-table/app-table.component';


@NgModule({
  declarations: [
    AppComponent,
    SchoolYearDDComponent,
    GenderDDComponent,
    SportDDComponent,
    ClassSizeDDComponent,
    DatabaseComponentComponent,
    AlgorithmTYPESCRIPTComponent,
    SectionalGroupComponent,
    SectionalBoxesComponent,
    AppTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
