import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SendToClarificationRepComponent } from './send-to-clarification-rep.component';

describe('SendToClarificationRepComponent', () => {
  let component: SendToClarificationRepComponent;
  let fixture: ComponentFixture<SendToClarificationRepComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SendToClarificationRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendToClarificationRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
