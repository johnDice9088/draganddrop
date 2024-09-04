import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewapiComponent } from './newapi.component';

describe('NewapiComponent', () => {
  let component: NewapiComponent;
  let fixture: ComponentFixture<NewapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewapiComponent]
    });
    fixture = TestBed.createComponent(NewapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
