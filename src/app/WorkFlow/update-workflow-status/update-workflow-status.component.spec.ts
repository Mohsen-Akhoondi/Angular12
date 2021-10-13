import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpdateWorkflowStatusComponent } from './update-workflow-status.component';

describe('UpdateWorkflowStatusComponent', () => {
  let component: UpdateWorkflowStatusComponent;
  let fixture: ComponentFixture<UpdateWorkflowStatusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWorkflowStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWorkflowStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
