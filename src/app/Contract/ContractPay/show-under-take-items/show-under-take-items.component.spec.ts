import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShowUnderTakeItemsComponent } from './show-under-take-items.component';

describe('ShowUnderTakeItemsComponent', () => {
  let component: ShowUnderTakeItemsComponent;
  let fixture: ComponentFixture<ShowUnderTakeItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUnderTakeItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUnderTakeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
