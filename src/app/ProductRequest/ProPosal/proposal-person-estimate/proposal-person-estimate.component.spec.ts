import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProposalPersonEstimateComponent } from './proposal-person-estimate.component';

describe('ProposalPersonEstimateComponent', () => {
  let component: ProposalPersonEstimateComponent;
  let fixture: ComponentFixture<ProposalPersonEstimateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalPersonEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalPersonEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
