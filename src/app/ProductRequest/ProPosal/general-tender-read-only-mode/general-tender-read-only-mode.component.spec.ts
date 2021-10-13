import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GeneralTenderReadOnlyModeComponent } from './general-tender-read-only-mode.component';

describe('GeneralTenderReadOnlyModeComponent', () => {
  let component: GeneralTenderReadOnlyModeComponent;
  let fixture: ComponentFixture<GeneralTenderReadOnlyModeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTenderReadOnlyModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTenderReadOnlyModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
