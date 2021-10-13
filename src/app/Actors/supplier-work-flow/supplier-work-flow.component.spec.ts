import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SupplierWorkFlowComponent } from './supplier-work-flow.component';

describe('SupplierWorkFlowComponent', () => {
  let component: SupplierWorkFlowComponent;
  let fixture: ComponentFixture<SupplierWorkFlowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierWorkFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierWorkFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
