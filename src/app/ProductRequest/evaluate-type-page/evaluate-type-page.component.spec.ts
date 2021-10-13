import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EvaluateTypePageComponent } from './evaluate-type-page.component';

describe('EvaluateTypePageComponent', () => {
  let component: EvaluateTypePageComponent;
  let fixture: ComponentFixture<EvaluateTypePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateTypePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
