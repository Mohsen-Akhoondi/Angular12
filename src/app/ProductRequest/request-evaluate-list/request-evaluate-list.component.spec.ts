import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RequestEvaluateListComponent } from './request-evaluate-list.component';

describe('RequestEvaluateListComponent', () => {
  let component: RequestEvaluateListComponent;
  let fixture: ComponentFixture<RequestEvaluateListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestEvaluateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEvaluateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
