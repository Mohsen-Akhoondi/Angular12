import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExcelLoadDataComponent } from './excel-load-data.component';

describe('ExcelLoadDataComponent', () => {
  let component: ExcelLoadDataComponent;
  let fixture: ComponentFixture<ExcelLoadDataComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelLoadDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelLoadDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
