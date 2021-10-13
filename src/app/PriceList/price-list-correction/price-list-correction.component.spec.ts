import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PriceListCorrectionComponent } from './price-list-correction.component';

describe('PriceListCorrectionComponent', () => {
  let component: PriceListCorrectionComponent;
  let fixture: ComponentFixture<PriceListCorrectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceListCorrectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceListCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
