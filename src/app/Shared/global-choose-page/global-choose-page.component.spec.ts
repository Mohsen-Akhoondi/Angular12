import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlobalChoosePageComponent } from './global-choose-page.component';

describe('GlobalChoosePageComponent', () => {
  let component: GlobalChoosePageComponent;
  let fixture: ComponentFixture<GlobalChoosePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalChoosePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalChoosePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
