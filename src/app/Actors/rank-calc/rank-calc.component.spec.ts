import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RankCalcComponent } from './rank-calc.component';

describe('RankCalcComponent', () => {
  let component: RankCalcComponent;
  let fixture: ComponentFixture<RankCalcComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RankCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
