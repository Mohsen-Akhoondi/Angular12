import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrePayComponent } from './pre-pay.component';

describe('PrePayComponent', () => {
  let component: PrePayComponent;
  let fixture: ComponentFixture<PrePayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrePayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
