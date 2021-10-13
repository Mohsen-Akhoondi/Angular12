import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarTagComponent } from './car-tag.component';

describe('CarTagComponent', () => {
  let component: CarTagComponent;
  let fixture: ComponentFixture<CarTagComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
