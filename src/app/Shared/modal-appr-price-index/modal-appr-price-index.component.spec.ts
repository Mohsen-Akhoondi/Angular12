import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalApprPriceIndexComponent } from './modal-appr-price-index.component';

describe('ModalApprPriceIndexComponent', () => {
  let component: ModalApprPriceIndexComponent;
  let fixture: ComponentFixture<ModalApprPriceIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApprPriceIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApprPriceIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
