import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EstateRecognitionEvaluationComponent } from './estate-recognition-evaluation.component';

describe('EstateRecognitionEvaluationComponent', () => {
  let component: EstateRecognitionEvaluationComponent;
  let fixture: ComponentFixture<EstateRecognitionEvaluationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateRecognitionEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateRecognitionEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
