import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdjustmentPriceRangeFormulasPageComponent } from './adjustment-price-range-formulas-page.component';

describe('AdjustmentPriceRangeFormulasPageComponent', () => {
  let component: AdjustmentPriceRangeFormulasPageComponent;
  let fixture: ComponentFixture<AdjustmentPriceRangeFormulasPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustmentPriceRangeFormulasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustmentPriceRangeFormulasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
