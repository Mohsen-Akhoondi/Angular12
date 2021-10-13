import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResearcherProductRequestListComponent } from './researcher-product-request-list.component';

describe('ResearcherProductRequestListComponent', () => {
  let component: ResearcherProductRequestListComponent;
  let fixture: ComponentFixture<ResearcherProductRequestListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearcherProductRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearcherProductRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
