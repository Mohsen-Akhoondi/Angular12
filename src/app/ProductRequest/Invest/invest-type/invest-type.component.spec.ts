import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InvestTypeComponent } from './invest-type.component';

describe('InvestTypeComponent', () => {
  let component: InvestTypeComponent;
  let fixture: ComponentFixture<InvestTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
