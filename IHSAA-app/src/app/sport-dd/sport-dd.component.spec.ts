import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportDDComponent } from './sport-dd.component';

describe('SportDDComponent', () => {
  let component: SportDDComponent;
  let fixture: ComponentFixture<SportDDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportDDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportDDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
