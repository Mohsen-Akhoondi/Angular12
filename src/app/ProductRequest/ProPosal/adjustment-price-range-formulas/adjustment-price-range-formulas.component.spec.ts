import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdjustmentPriceRangeFormulasComponent } from './adjustment-price-range-formulas.component';

describe('AdjustmentPriceRangeFormulasComponent', () => {
  let component: AdjustmentPriceRangeFormulasComponent;
  let fixture: ComponentFixture<AdjustmentPriceRangeFormulasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustmentPriceRangeFormulasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustmentPriceRangeFormulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
