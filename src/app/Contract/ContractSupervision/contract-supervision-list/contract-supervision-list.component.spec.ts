import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractSupervisionListComponent } from './contract-supervision-list.component';

describe('ContractSupervisionListComponent', () => {
  let component: ContractSupervisionListComponent;
  let fixture: ComponentFixture<ContractSupervisionListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractSupervisionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractSupervisionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
