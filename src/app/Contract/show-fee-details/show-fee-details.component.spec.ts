import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShowFeeDetailsComponent } from './show-fee-details.component';

describe('ShowFeeDetailsComponent', () => {
  let component: ShowFeeDetailsComponent;
  let fixture: ComponentFixture<ShowFeeDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
