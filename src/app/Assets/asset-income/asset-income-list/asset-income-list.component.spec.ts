import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssetIncomeListComponent } from './asset-income-list.component';

describe('AssetIncomeListComponent', () => {
  let component: AssetIncomeListComponent;
  let fixture: ComponentFixture<AssetIncomeListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetIncomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetIncomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
