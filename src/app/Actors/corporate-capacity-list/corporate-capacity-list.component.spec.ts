import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CorporateCapacityListComponent } from './corporate-capacity-list.component';

describe('CorporateCapacityListComponent', () => {
  let component: CorporateCapacityListComponent;
  let fixture: ComponentFixture<CorporateCapacityListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateCapacityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateCapacityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
