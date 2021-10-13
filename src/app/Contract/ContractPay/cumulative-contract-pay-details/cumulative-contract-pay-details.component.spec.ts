import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CumulativeContractPayDetailsComponent } from './cumulative-contract-pay-details.component';

describe('CumulativeContractPayDetailsComponent', () => {
  let component: CumulativeContractPayDetailsComponent;
  let fixture: ComponentFixture<CumulativeContractPayDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CumulativeContractPayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumulativeContractPayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
