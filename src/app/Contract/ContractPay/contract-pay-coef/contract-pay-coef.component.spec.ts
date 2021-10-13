import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractPayCoefComponent } from './contract-pay-coef.component';

describe('ContractPayCoefComponent', () => {
  let component: ContractPayCoefComponent;
  let fixture: ComponentFixture<ContractPayCoefComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractPayCoefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractPayCoefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
