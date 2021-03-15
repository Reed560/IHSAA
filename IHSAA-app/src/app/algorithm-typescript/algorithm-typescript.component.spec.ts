import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmTYPESCRIPTComponent } from './algorithm-typescript.component';

describe('AlgorithmTYPESCRIPTComponent', () => {
  let component: AlgorithmTYPESCRIPTComponent;
  let fixture: ComponentFixture<AlgorithmTYPESCRIPTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgorithmTYPESCRIPTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmTYPESCRIPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
