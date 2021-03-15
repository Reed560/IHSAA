import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolYearDDComponent } from './school-year-dd.component';

describe('SchoolYearDDComponent', () => {
  let component: SchoolYearDDComponent;
  let fixture: ComponentFixture<SchoolYearDDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolYearDDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolYearDDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
