import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChoosenContractEstimateRepComponent } from './choosen-contract-estimate-rep.component';

describe('ChoosenContractEstimateRepComponent', () => {
  let component: ChoosenContractEstimateRepComponent;
  let fixture: ComponentFixture<ChoosenContractEstimateRepComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosenContractEstimateRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosenContractEstimateRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
