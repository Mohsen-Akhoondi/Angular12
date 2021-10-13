import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConsultPersonComponent } from './consult-person.component';

describe('ConsultPersonComponent', () => {
  let component: ConsultPersonComponent;
  let fixture: ComponentFixture<ConsultPersonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
