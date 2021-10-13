import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RequestProposalItemComponent } from './request-proposal-item.component';

describe('RequestProposalItemComponent', () => {
  let component: RequestProposalItemComponent;
  let fixture: ComponentFixture<RequestProposalItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestProposalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestProposalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
