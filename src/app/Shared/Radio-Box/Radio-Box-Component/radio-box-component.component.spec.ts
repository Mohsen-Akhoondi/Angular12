import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RadioBoxComponentComponent } from './radio-box-component.component';

describe('RadioBoxComponentComponent', () => {
  let component: RadioBoxComponentComponent;
  let fixture: ComponentFixture<RadioBoxComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioBoxComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioBoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
