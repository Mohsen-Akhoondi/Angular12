import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CorporatePersonnelTypeComponent } from './corporate-personnel-type.component';

describe('CorporatePersonnelTypeComponent', () => {
  let component: CorporatePersonnelTypeComponent;
  let fixture: ComponentFixture<CorporatePersonnelTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporatePersonnelTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatePersonnelTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
