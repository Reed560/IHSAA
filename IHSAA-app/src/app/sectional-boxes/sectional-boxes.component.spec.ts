import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionalBoxesComponent } from './sectional-boxes.component';

describe('SectionalBoxesComponent', () => {
  let component: SectionalBoxesComponent;
  let fixture: ComponentFixture<SectionalBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionalBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionalBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
