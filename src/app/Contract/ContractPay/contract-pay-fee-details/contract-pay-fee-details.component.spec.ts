import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractPayFeeDetailsComponent } from './contract-pay-fee-details.component';

describe('ContractPayFeeDetailsComponent', () => {
  let component: ContractPayFeeDetailsComponent;
  let fixture: ComponentFixture<ContractPayFeeDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractPayFeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractPayFeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
