import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductRequestProvisionComponent } from './product-request-provision.component';

describe('ProductRequestProvisionComponent', () => {
  let component: ProductRequestProvisionComponent;
  let fixture: ComponentFixture<ProductRequestProvisionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRequestProvisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequestProvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
