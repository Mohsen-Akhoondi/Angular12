import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractStatusSummarySearchPageComponent } from './contract-status-summary-search-page.component';

describe('ContractStatusSummarySearchPageComponent', () => {
  let component: ContractStatusSummarySearchPageComponent;
  let fixture: ComponentFixture<ContractStatusSummarySearchPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractStatusSummarySearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractStatusSummarySearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
