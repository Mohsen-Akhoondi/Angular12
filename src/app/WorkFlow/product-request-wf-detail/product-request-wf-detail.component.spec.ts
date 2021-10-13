import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductRequestWFDetailComponent } from './product-request-wf-detail.component';

describe('ProductRequestWFDetailComponent', () => {
  let component: ProductRequestWFDetailComponent;
  let fixture: ComponentFixture<ProductRequestWFDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRequestWFDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequestWFDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
