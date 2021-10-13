import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractPeriodReportComponent } from './contract-period-report.component';

describe('ContractPeriodReportComponent', () => {
  let component: ContractPeriodReportComponent;
  let fixture: ComponentFixture<ContractPeriodReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractPeriodReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractPeriodReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
