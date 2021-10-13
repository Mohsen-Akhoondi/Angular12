import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubLedgerAccBookComponent } from './sub-ledger-acc-book.component';

describe('SubLedgerAccBookComponent', () => {
  let component: SubLedgerAccBookComponent;
  let fixture: ComponentFixture<SubLedgerAccBookComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubLedgerAccBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubLedgerAccBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
