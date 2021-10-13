import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkflowNodePageComponent } from './workflow-node-page.component';

describe('WorkflowNodePageComponent', () => {
  let component: WorkflowNodePageComponent;
  let fixture: ComponentFixture<WorkflowNodePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowNodePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowNodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
