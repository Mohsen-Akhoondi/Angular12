import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChoosenContractPayRepComponent } from './choosen-contract-pay-rep.component';

describe('ChoosenContractPayRepComponent', () => {
  let component: ChoosenContractPayRepComponent;
  let fixture: ComponentFixture<ChoosenContractPayRepComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosenContractPayRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosenContractPayRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
