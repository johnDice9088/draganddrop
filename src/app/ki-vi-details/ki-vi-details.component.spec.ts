import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiViDetailsComponent } from './ki-vi-details.component';

describe('KiViDetailsComponent', () => {
  let component: KiViDetailsComponent;
  let fixture: ComponentFixture<KiViDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KiViDetailsComponent]
    });
    fixture = TestBed.createComponent(KiViDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
