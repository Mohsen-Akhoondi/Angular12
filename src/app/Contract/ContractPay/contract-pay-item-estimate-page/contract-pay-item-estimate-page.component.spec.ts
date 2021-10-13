import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractPayItemEstimatePageComponent } from './contract-pay-item-estimate-page.component';

describe('ContractPayItemEstimatePageComponent', () => {
  let component: ContractPayItemEstimatePageComponent;
  let fixture: ComponentFixture<ContractPayItemEstimatePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractPayItemEstimatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractPayItemEstimatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
