import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FilterDocumentTypeComponent } from './filter-document-type.component';

describe('FilterDocumentTypeComponent', () => {
  let component: FilterDocumentTypeComponent;
  let fixture: ComponentFixture<FilterDocumentTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDocumentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDocumentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
