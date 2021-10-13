import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractWfReportLevel3Component } from './contract-wf-report-level3.component';

describe('ContractWfReportLevel3Component', () => {
  let component: ContractWfReportLevel3Component;
  let fixture: ComponentFixture<ContractWfReportLevel3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractWfReportLevel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractWfReportLevel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
