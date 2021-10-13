import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChooseReportProductRequestItemComponent } from './choose-report-product-request-item.component';

describe('ChooseReportProductRequestItemComponent', () => {
  let component: ChooseReportProductRequestItemComponent;
  let fixture: ComponentFixture<ChooseReportProductRequestItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseReportProductRequestItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseReportProductRequestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
