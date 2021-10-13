import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractPayDistanceResultComponent } from './contract-pay-distance-result.component';

describe('ContractPayDistanceResultComponent', () => {
  let component: ContractPayDistanceResultComponent;
  let fixture: ComponentFixture<ContractPayDistanceResultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractPayDistanceResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractPayDistanceResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
