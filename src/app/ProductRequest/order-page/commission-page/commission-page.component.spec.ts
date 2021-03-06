import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommissionPageComponent } from './commission-page.component';

describe('CommissionPageComponent', () => {
  let component: CommissionPageComponent;
  let fixture: ComponentFixture<CommissionPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
