import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OtherContractDocumentsComponent } from './other-contract-documents.component';

describe('OtherContractDocumentsComponent', () => {
  let component: OtherContractDocumentsComponent;
  let fixture: ComponentFixture<OtherContractDocumentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherContractDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherContractDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
