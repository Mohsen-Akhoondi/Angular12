import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractPayTransportComponent } from './contract-pay-transport.component';

describe('ContractPayTransportComponent', () => {
  let component: ContractPayTransportComponent;
  let fixture: ComponentFixture<ContractPayTransportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractPayTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractPayTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
