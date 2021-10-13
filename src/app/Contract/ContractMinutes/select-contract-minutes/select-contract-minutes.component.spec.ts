import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectContractMinutesComponent } from './select-contract-minutes.component';

describe('SelectContractMinutesComponent', () => {
  let component: SelectContractMinutesComponent;
  let fixture: ComponentFixture<SelectContractMinutesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectContractMinutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectContractMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
