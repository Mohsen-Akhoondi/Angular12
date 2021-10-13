import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductRequestPersonItemComponent } from './product-request-person-item.component';

describe('ProductRequestPersonItemComponent', () => {
  let component: ProductRequestPersonItemComponent;
  let fixture: ComponentFixture<ProductRequestPersonItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRequestPersonItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequestPersonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
