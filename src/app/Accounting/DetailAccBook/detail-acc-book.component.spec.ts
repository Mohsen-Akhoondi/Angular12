import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailAccBookComponent } from './detail-acc-book.component';

describe('DetailAccBookComponent', () => {
  let component: DetailAccBookComponent;
  let fixture: ComponentFixture<DetailAccBookComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAccBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAccBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
