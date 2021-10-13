import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommitionComponent } from './commition.component';

describe('CommitionComponent', () => {
  let component: CommitionComponent;
  let fixture: ComponentFixture<CommitionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
