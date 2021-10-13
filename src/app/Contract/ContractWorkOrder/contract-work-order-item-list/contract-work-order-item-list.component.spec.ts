import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractWorkOrderItemListComponent } from './contract-work-order-item-list.component';

describe('ContractWorkOrderItemListComponent', () => {
  let component: ContractWorkOrderItemListComponent;
  let fixture: ComponentFixture<ContractWorkOrderItemListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractWorkOrderItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractWorkOrderItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
