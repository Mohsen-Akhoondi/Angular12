import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RequestEvaluateComponent } from './request-evaluate.component';

describe('RequestEvaluateComponent', () => {
  let component: RequestEvaluateComponent;
  let fixture: ComponentFixture<RequestEvaluateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestEvaluateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
