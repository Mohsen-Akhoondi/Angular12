import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductRequestPageProposalComponent } from './product-request-page-proposal.component';

describe('ProductRequestPageProposalComponent', () => {
  let component: ProductRequestPageProposalComponent;
  let fixture: ComponentFixture<ProductRequestPageProposalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRequestPageProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequestPageProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
