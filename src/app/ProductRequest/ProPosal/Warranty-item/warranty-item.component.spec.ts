import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WarrantyItemComponent } from './warranty-item.component';

describe('WarrantyItemComponent', () => {
  let component: WarrantyItemComponent;
  let fixture: ComponentFixture<WarrantyItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrantyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
