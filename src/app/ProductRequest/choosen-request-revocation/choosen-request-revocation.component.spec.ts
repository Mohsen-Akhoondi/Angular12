import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChoosenRequestRevocationComponent } from './choosen-request-revocation.component';

describe('ChoosenRequestRevocationComponent', () => {
  let component: ChoosenRequestRevocationComponent;
  let fixture: ComponentFixture<ChoosenRequestRevocationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosenRequestRevocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosenRequestRevocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
