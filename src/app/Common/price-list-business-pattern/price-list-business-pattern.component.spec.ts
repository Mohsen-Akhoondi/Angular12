import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PriceListBusinessPatternComponent } from './price-list-business-pattern.component';

describe('PriceListBusinessPatternComponent', () => {
  let component: PriceListBusinessPatternComponent;
  let fixture: ComponentFixture<PriceListBusinessPatternComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceListBusinessPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceListBusinessPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
