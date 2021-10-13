import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssetIncomeComponent } from './asset-income.component';

describe('AssetIncomeComponent', () => {
  let component: AssetIncomeComponent;
  let fixture: ComponentFixture<AssetIncomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
