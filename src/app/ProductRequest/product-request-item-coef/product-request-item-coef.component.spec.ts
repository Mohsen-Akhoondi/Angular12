import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductRequestItemCoefComponent } from './product-request-item-coef.component';

describe('ProductRequestItemCoefComponent', () => {
  let component: ProductRequestItemCoefComponent;
  let fixture: ComponentFixture<ProductRequestItemCoefComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRequestItemCoefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequestItemCoefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
