import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractPayShipmentComponent } from './contract-pay-shipment.component';

describe('ContractPayShipmentComponent', () => {
  let component: ContractPayShipmentComponent;
  let fixture: ComponentFixture<ContractPayShipmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractPayShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractPayShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
