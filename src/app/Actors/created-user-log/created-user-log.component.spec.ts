import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreatedUserLogComponent } from './created-user-log.component';

describe('CreatedUserLogComponent', () => {
  let component: CreatedUserLogComponent;
  let fixture: ComponentFixture<CreatedUserLogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedUserLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedUserLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
