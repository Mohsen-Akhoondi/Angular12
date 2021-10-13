import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelecetContractEstimateComponent } from './selecet-contract-estimate.component';

describe('SelecetContractEstimateComponent', () => {
  let component: SelecetContractEstimateComponent;
  let fixture: ComponentFixture<SelecetContractEstimateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecetContractEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecetContractEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
