import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DealDetailsComponent } from './deal-details.component';

describe('DealDetailsComponent', () => {
  let component: DealDetailsComponent;
  let fixture: ComponentFixture<DealDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DealDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
