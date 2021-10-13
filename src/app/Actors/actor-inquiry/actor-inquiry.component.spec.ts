import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActorInquiryComponent } from './actor-inquiry.component';

describe('ActorInquiryComponent', () => {
  let component: ActorInquiryComponent;
  let fixture: ComponentFixture<ActorInquiryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
