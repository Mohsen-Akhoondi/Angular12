import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectCellEditorComponent } from './ng-select-cell-editor.component';

describe('NgSelectCellEditorComponent', () => {
  let component: NgSelectCellEditorComponent;
  let fixture: ComponentFixture<NgSelectCellEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSelectCellEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSelectCellEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
