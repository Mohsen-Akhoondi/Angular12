import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SetContractPriceListPatternComponent } from './set-contract-price-list-pattern.component';

describe('SetContractPriceListPatternComponent', () => {
  let component: SetContractPriceListPatternComponent;
  let fixture: ComponentFixture<SetContractPriceListPatternComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SetContractPriceListPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetContractPriceListPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
