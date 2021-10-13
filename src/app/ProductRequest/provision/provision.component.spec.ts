import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProvisionComponent } from './provision.component';

describe('ProvisionComponent', () => {
  let component: ProvisionComponent;
  let fixture: ComponentFixture<ProvisionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
