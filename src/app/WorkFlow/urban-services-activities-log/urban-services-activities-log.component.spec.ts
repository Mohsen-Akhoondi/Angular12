import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UrbanServicesActivitiesLogComponent } from './urban-services-activities-log.component';

describe('UrbanServicesActivitiesLogComponent', () => {
  let component: UrbanServicesActivitiesLogComponent;
  let fixture: ComponentFixture<UrbanServicesActivitiesLogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanServicesActivitiesLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanServicesActivitiesLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
