import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateContractOnFlowComponent } from './create-contract-on-flow.component';

describe('CreateContractOnFlowComponent', () => {
  let component: CreateContractOnFlowComponent;
  let fixture: ComponentFixture<CreateContractOnFlowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateContractOnFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContractOnFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
