import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductRequestPageWithoutFlowComponent } from './product-request-page-without-flow.component';

describe('ProductRequestPageWithoutFlowComponent', () => {
  let component: ProductRequestPageWithoutFlowComponent;
  let fixture: ComponentFixture<ProductRequestPageWithoutFlowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRequestPageWithoutFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequestPageWithoutFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
