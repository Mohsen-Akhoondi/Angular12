import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomCheckBoxComponent } from './custom-check-box.component';

describe('CustomCheckBoxComponent', () => {
  let component: CustomCheckBoxComponent;
  let fixture: ComponentFixture<CustomCheckBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
