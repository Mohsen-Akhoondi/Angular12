import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CorporateCapacityComponent } from './corporate-capacity.component';

describe('CorporateCapacityComponent', () => {
  let component: CorporateCapacityComponent;
  let fixture: ComponentFixture<CorporateCapacityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateCapacityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
