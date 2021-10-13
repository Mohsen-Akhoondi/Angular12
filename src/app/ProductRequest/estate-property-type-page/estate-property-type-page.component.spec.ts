import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EstatePropertyTypePageComponent } from './estate-property-type-page.component';

describe('EstatePropertyTypePageComponent', () => {
  let component: EstatePropertyTypePageComponent;
  let fixture: ComponentFixture<EstatePropertyTypePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatePropertyTypePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatePropertyTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
