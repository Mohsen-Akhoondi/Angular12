import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompletionContractInfoComponent } from './completion-contract-info.component';

describe('CompletionContractInfoComponent', () => {
  let component: CompletionContractInfoComponent;
  let fixture: ComponentFixture<CompletionContractInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletionContractInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionContractInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
