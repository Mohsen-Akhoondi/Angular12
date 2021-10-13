import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChildPriceListTopicPageComponent } from './child-price-list-topic-page.component';

describe('ChildPriceListTopicPageComponent', () => {
  let component: ChildPriceListTopicPageComponent;
  let fixture: ComponentFixture<ChildPriceListTopicPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildPriceListTopicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPriceListTopicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
