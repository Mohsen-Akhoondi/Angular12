import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractEstimatePageComponent } from './contract-estimate-page.component';

describe('ContractEstimatePageComponent', () => {
  let component: ContractEstimatePageComponent;
  let fixture: ComponentFixture<ContractEstimatePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractEstimatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractEstimatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
