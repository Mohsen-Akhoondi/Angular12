import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NumberInputComponentComponent } from './number-input-component.component';

describe('NumberInputComponentComponent', () => {
  let component: NumberInputComponentComponent;
  let fixture: ComponentFixture<NumberInputComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberInputComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
