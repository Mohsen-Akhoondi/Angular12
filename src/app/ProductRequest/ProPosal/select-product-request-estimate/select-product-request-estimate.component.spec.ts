import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectProductRequestEstimateComponent } from './select-product-request-estimate.component';

describe('SelectProductRequestEstimateComponent', () => {
  let component: SelectProductRequestEstimateComponent;
  let fixture: ComponentFixture<SelectProductRequestEstimateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectProductRequestEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProductRequestEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
