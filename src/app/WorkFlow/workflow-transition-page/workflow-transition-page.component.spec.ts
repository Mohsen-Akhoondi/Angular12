import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkflowTransitionPageComponent } from './workflow-transition-page.component';

describe('WorkflowTransitionPageComponent', () => {
  let component: WorkflowTransitionPageComponent;
  let fixture: ComponentFixture<WorkflowTransitionPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowTransitionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowTransitionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
