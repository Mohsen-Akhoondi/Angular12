import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PriceListTopicSelectComponent } from './price-list-topic-select.component';

describe('PriceListTopicSelectComponent', () => {
  let component: PriceListTopicSelectComponent;
  let fixture: ComponentFixture<PriceListTopicSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceListTopicSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceListTopicSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
