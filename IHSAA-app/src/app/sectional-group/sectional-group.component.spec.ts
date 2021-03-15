import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionalGroupComponent } from './sectional-group.component';

describe('SectionalGroupComponent', () => {
  let component: SectionalGroupComponent;
  let fixture: ComponentFixture<SectionalGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionalGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionalGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
