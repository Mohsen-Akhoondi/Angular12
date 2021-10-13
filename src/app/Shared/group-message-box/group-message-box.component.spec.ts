import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GroupMessageBoxComponent } from './group-message-box.component';

describe('GroupMessageBoxComponent', () => {
  let component: GroupMessageBoxComponent;
  let fixture: ComponentFixture<GroupMessageBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMessageBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMessageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
