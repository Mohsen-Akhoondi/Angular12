import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeePageComponent } from './fee-page.component';

describe('FeePageComponent', () => {
  let component: FeePageComponent;
  let fixture: ComponentFixture<FeePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
