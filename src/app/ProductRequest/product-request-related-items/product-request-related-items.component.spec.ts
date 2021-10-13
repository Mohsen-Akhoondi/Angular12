import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductRequestRelatedItemsComponent } from './product-request-related-items.component';

describe('ProductRequestRelatedItemsComponent', () => {
  let component: ProductRequestRelatedItemsComponent;
  let fixture: ComponentFixture<ProductRequestRelatedItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRequestRelatedItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequestRelatedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
