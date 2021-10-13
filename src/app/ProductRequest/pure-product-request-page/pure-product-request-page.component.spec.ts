import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PureProductRequestPageComponent } from './pure-product-request-page.component';

describe('PureProductRequestPageComponent', () => {
  let component: PureProductRequestPageComponent;
  let fixture: ComponentFixture<PureProductRequestPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PureProductRequestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureProductRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
