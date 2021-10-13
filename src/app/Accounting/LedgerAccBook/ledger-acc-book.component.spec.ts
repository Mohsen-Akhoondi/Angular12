import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LedgerAccBookComponent } from './ledger-acc-book.component';

describe('LedgerAccBookComponent', () => {
  let component: LedgerAccBookComponent;
  let fixture: ComponentFixture<LedgerAccBookComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgerAccBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerAccBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
