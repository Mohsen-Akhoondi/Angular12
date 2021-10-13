import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractListPageComponent } from './contract-list-page.component';

describe('ContractListPageComponent', () => {
  let component: ContractListPageComponent;
  let fixture: ComponentFixture<ContractListPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
