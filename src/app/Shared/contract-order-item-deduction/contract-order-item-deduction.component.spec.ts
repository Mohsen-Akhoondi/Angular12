import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractOrderItemDeductionComponent } from './contract-order-item-deduction.component';

describe('ContractOrderItemDeductionComponent', () => {
  let component: ContractOrderItemDeductionComponent;
  let fixture: ComponentFixture<ContractOrderItemDeductionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractOrderItemDeductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractOrderItemDeductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
