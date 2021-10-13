import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MonthWorkHourComponent } from './month-work-hour.component';

describe('MonthWorkHourComponent', () => {
  let component: MonthWorkHourComponent;
  let fixture: ComponentFixture<MonthWorkHourComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthWorkHourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthWorkHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
