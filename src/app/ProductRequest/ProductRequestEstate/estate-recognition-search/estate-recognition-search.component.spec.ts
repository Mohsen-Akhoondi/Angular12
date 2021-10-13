import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EstateRecognitionSearchComponent } from './estate-recognition-search.component';

describe('EstateRecognitionSearchComponent', () => {
  let component: EstateRecognitionSearchComponent;
  let fixture: ComponentFixture<EstateRecognitionSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateRecognitionSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateRecognitionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
