import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalArchiveYearComponent } from './modal-archive-year.component';

describe('ModalArchiveYearComponent', () => {
  let component: ModalArchiveYearComponent;
  let fixture: ComponentFixture<ModalArchiveYearComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalArchiveYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalArchiveYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
