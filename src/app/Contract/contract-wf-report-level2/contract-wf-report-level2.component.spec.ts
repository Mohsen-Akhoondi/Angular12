import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractWfReportLevel2Component } from './contract-wf-report-level2.component';

describe('ContractWfReportLevel2Component', () => {
  let component: ContractWfReportLevel2Component;
  let fixture: ComponentFixture<ContractWfReportLevel2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractWfReportLevel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractWfReportLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
