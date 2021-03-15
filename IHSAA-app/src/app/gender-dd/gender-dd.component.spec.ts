import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderDDComponent } from './gender-dd.component';

describe('GenderDDComponent', () => {
  let component: GenderDDComponent;
  let fixture: ComponentFixture<GenderDDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderDDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderDDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
