import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserWorkLogInvoiceComponent } from './user-work-log-invoice.component';

describe('UserWorkLogInvoiceComponent', () => {
  let component: UserWorkLogInvoiceComponent;
  let fixture: ComponentFixture<UserWorkLogInvoiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWorkLogInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkLogInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
