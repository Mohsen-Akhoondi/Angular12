import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractStatusSummaryRepPageComponent } from './contract-status-summary-rep-page.component';

describe('ContractStatusSummaryRepPageComponent', () => {
  let component: ContractStatusSummaryRepPageComponent;
  let fixture: ComponentFixture<ContractStatusSummaryRepPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractStatusSummaryRepPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractStatusSummaryRepPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
