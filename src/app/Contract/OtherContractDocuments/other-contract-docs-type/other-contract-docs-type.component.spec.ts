import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OtherContractDocsTypeComponent } from './other-contract-docs-type.component';

describe('OtherContractDocsTypeComponent', () => {
  let component: OtherContractDocsTypeComponent;
  let fixture: ComponentFixture<OtherContractDocsTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherContractDocsTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherContractDocsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
