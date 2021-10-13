import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NumberFieldEditableComponent } from './number-field-editable.component';

describe('NumberFieldEditableComponent', () => {
  let component: NumberFieldEditableComponent;
  let fixture: ComponentFixture<NumberFieldEditableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberFieldEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberFieldEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
