import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportAverageWorkflowObjectsComponent } from './report-average-workflow-objects.component';

describe('ReportAverageWorkflowObjectsComponent', () => {
  let component: ReportAverageWorkflowObjectsComponent;
  let fixture: ComponentFixture<ReportAverageWorkflowObjectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAverageWorkflowObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAverageWorkflowObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
