import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DealUploadDocsComponent } from './deal-upload-docs.component';

describe('DealUploadDocsComponent', () => {
  let component: DealUploadDocsComponent;
  let fixture: ComponentFixture<DealUploadDocsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DealUploadDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealUploadDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
