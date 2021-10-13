import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CartableComponent } from './cartable.component';

describe('CartableComponent', () => {
  let component: CartableComponent;
  let fixture: ComponentFixture<CartableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CartableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
