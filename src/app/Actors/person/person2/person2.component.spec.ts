import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Person2Component } from './person2.component';

describe('Person2Component', () => {
  let component: Person2Component;
  let fixture: ComponentFixture<Person2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Person2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Person2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
