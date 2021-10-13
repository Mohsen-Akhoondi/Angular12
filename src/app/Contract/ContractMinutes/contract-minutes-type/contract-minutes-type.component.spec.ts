import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractMinutesTypeComponent } from './contract-minutes-type.component';

describe('ContractMinutesTypeComponent', () => {
  let component: ContractMinutesTypeComponent;
  let fixture: ComponentFixture<ContractMinutesTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractMinutesTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractMinutesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
