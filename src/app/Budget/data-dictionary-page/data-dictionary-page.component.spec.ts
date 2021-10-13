import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DataDictionaryPageComponent } from './data-dictionary-page.component';

describe('DataDictionaryPageComponent', () => {
  let component: DataDictionaryPageComponent;
  let fixture: ComponentFixture<DataDictionaryPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDictionaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDictionaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
