import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompleteContractListReportComponent } from './complete-contract-list-report.component';

describe('CompleteContractListReportComponent', () => {
  let component: CompleteContractListReportComponent;
  let fixture: ComponentFixture<CompleteContractListReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteContractListReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteContractListReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
