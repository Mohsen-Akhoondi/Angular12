import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RequestItemEntityPageComponent } from './request-item-entity-page.component';

describe('RequestItemEntityPageComponent', () => {
  let component: RequestItemEntityPageComponent;
  let fixture: ComponentFixture<RequestItemEntityPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestItemEntityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestItemEntityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
