import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FileViwerPageComponent } from './file-viwer-page.component';

describe('FileViwerPageComponent', () => {
  let component: FileViwerPageComponent;
  let fixture: ComponentFixture<FileViwerPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FileViwerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileViwerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
