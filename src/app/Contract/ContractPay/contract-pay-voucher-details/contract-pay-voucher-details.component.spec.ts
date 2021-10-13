import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractPayVoucherDetailsComponent } from './contract-pay-voucher-details.component';

describe('ContractPayVoucherDetailsComponent', () => {
  let component: ContractPayVoucherDetailsComponent;
  let fixture: ComponentFixture<ContractPayVoucherDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractPayVoucherDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractPayVoucherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
