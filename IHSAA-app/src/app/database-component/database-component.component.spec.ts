import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseComponentComponent } from './database-component.component';

describe('DatabaseComponentComponent', () => {
  let component: DatabaseComponentComponent;
  let fixture: ComponentFixture<DatabaseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
