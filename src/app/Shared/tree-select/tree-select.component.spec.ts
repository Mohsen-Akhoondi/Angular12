import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TreeSelectComponent } from './tree-select.component';

describe('TreeSelectComponent', () => {
  let component: TreeSelectComponent;
  let fixture: ComponentFixture<TreeSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
