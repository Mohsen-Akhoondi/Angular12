import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EvaluateMethodPageComponent } from './evaluate-method-page.component';

describe('EvaluateMethodPageComponent', () => {
  let component: EvaluateMethodPageComponent;
  let fixture: ComponentFixture<EvaluateMethodPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateMethodPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateMethodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
