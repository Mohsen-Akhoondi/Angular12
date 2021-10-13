import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractCoefTypeComponent } from './contract-coef-type.component';

describe('ContractCoefTypeComponent', () => {
  let component: ContractCoefTypeComponent;
  let fixture: ComponentFixture<ContractCoefTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractCoefTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractCoefTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
