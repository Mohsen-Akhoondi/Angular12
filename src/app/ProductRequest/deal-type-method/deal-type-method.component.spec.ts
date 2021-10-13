import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DealTypeMethodComponent } from './deal-type-method.component';

describe('DealTypeMethodComponent', () => {
  let component: DealTypeMethodComponent;
  let fixture: ComponentFixture<DealTypeMethodComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DealTypeMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealTypeMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
