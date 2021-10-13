import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdvertisingListComponent } from './advertising-list.component';

describe('AdvertisingListComponent', () => {
  let component: AdvertisingListComponent;
  let fixture: ComponentFixture<AdvertisingListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
