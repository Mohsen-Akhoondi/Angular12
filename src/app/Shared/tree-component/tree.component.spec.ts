import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyTreeComponent } from './tree.component';

describe('TreeComponent', () => {
  let component: MyTreeComponent;
  let fixture: ComponentFixture<MyTreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
