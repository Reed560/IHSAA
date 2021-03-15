import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSizeDDComponent } from './class-size-dd.component';

describe('ClassSizeDDComponent', () => {
  let component: ClassSizeDDComponent;
  let fixture: ComponentFixture<ClassSizeDDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassSizeDDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSizeDDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
