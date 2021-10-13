import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractPersonPageComponent } from './contract-person-page.component';

describe('ContractPersonPageComponent', () => {
  let component: ContractPersonPageComponent;
  let fixture: ComponentFixture<ContractPersonPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractPersonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractPersonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
