import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectVirtualScrollComponent } from './ng-select-virtual-scroll.component';

describe('NgSelectVirtualScrollComponent', () => {
  let component: NgSelectVirtualScrollComponent;
  let fixture: ComponentFixture<NgSelectVirtualScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSelectVirtualScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSelectVirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
