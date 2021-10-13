import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractMinutesListComponent } from './contract-minutes-list.component';

describe('ContractMinutesListComponent', () => {
  let component: ContractMinutesListComponent;
  let fixture: ComponentFixture<ContractMinutesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractMinutesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractMinutesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
