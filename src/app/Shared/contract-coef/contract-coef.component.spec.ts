import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractCoefComponent } from './contract-coef.component';

describe('ContractCoefComponent', () => {
  let component: ContractCoefComponent;
  let fixture: ComponentFixture<ContractCoefComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractCoefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractCoefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
