import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractOrderitemCoefComponent } from './contract-orderitem-coef.component';

describe('ContractOrderitemCoefComponent', () => {
  let component: ContractOrderitemCoefComponent;
  let fixture: ComponentFixture<ContractOrderitemCoefComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractOrderitemCoefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractOrderitemCoefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
