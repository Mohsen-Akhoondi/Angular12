import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TenderPageComponent } from './tender-page.component';

describe('TenderPageComponent', () => {
  let component: TenderPageComponent;
  let fixture: ComponentFixture<TenderPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
