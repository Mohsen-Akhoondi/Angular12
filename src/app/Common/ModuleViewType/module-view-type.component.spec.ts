import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModuleViewTypeComponent } from './module-view-type.component';

describe('ModuleViewTypeComponent', () => {
  let component: ModuleViewTypeComponent;
  let fixture: ComponentFixture<ModuleViewTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleViewTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleViewTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
