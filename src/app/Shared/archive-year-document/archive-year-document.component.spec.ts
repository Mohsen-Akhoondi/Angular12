import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArchiveYearDocumentComponent } from './archive-year-document.component';

describe('ArchiveYearDocumentComponent', () => {
  let component: ArchiveYearDocumentComponent;
  let fixture: ComponentFixture<ArchiveYearDocumentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveYearDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveYearDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
