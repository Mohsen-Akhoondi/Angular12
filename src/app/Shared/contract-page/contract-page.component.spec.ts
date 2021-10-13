import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractPageComponent } from './contract-page.component';

describe('ContractPageComponent', () => {
  let component: ContractPageComponent;
  let fixture: ComponentFixture<ContractPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
