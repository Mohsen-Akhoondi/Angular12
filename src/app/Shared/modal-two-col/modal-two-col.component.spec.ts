import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalTwoColComponent } from './modal-two-col.component';

describe('ModalTwoColComponent', () => {
  let component: ModalTwoColComponent;
  let fixture: ComponentFixture<ModalTwoColComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTwoColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTwoColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
