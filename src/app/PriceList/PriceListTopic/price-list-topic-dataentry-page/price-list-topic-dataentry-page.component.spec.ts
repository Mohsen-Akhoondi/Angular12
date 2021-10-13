import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PriceListTopicDataentryPageComponent } from './price-list-topic-dataentry-page.component';

describe('PriceListTopicDataentryPageComponent', () => {
  let component: PriceListTopicDataentryPageComponent;
  let fixture: ComponentFixture<PriceListTopicDataentryPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceListTopicDataentryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceListTopicDataentryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
