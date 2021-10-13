import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DailyBookComponent } from './daily-book.component';

describe('DailyBookComponent', () => {
  let component: DailyBookComponent;
  let fixture: ComponentFixture<DailyBookComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
