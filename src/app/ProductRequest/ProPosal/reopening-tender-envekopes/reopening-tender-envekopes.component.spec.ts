import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReopeningTenderEnvekopesComponent } from './reopening-tender-envekopes.component';

describe('ReopeningTenderEnvekopesComponent', () => {
  let component: ReopeningTenderEnvekopesComponent;
  let fixture: ComponentFixture<ReopeningTenderEnvekopesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReopeningTenderEnvekopesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReopeningTenderEnvekopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
