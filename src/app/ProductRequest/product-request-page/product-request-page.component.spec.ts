import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductRequestPageComponent } from './product-request-page.component';

describe('ProductRequestPageComponent', () => {
  let component: ProductRequestPageComponent;
  let fixture: ComponentFixture<ProductRequestPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRequestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
