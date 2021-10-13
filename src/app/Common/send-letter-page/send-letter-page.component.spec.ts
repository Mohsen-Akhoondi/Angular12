import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SendLetterPageComponent } from './send-letter-page.component';

describe('SendLetterPageComponent', () => {
  let component: SendLetterPageComponent;
  let fixture: ComponentFixture<SendLetterPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SendLetterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendLetterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
