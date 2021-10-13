import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdvertisingSearchComponent } from './advertising-search.component';

describe('AdvertisingSearchComponent', () => {
  let component: AdvertisingSearchComponent;
  let fixture: ComponentFixture<AdvertisingSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisingSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
