import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GeneralTenderComponent } from './general-tender.component';

describe('GeneralTenderComponent', () => {
  let component: GeneralTenderComponent;
  let fixture: ComponentFixture<GeneralTenderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
