import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemodraganddropComponent } from './demodraganddrop.component';

describe('DemodraganddropComponent', () => {
  let component: DemodraganddropComponent;
  let fixture: ComponentFixture<DemodraganddropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemodraganddropComponent]
    });
    fixture = TestBed.createComponent(DemodraganddropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
