import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ControlProjectBgtInfoPageComponent } from './control-project-bgt-info-page.component';

describe('ControlProjectBgtInfoPageComponent', () => {
  let component: ControlProjectBgtInfoPageComponent;
  let fixture: ComponentFixture<ControlProjectBgtInfoPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlProjectBgtInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlProjectBgtInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
