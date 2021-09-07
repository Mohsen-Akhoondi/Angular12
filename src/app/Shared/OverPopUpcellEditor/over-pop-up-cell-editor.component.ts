import { Component, OnInit, ViewChild } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-over-pop-up-cell-editor',
  templateUrl: './over-pop-up-cell-editor.component.html',
  styleUrls: ['./over-pop-up-cell-editor.component.css']
})
export class OverPopUpCellEditorComponent implements ICellEditorAngularComp, OnInit {
  InputValue;
  BeginSearch;
  PopupParam;
  SearchPopupType;
  constructor() { }
  @ViewChild('inputRef') inputRefElement;
  ngOnInit() {
  }
  getValue() {
    if (this.InputValue) {
    return this.InputValue;
    } else { return ''; }
  }
  isPopup?(): boolean {
    return false;
  }
  isCancelBeforeStart?(): boolean {
    return false;
  }
  isCancelAfterEnd?(): boolean {
    return false;
  }
  focusIn?(): void {
  }
  focusOut?(): void {
  }
  agInit (params) {
    this.InputValue = params.value;
    this.SearchPopupType = params.SearchPopupType;
    if (params.PopupParam) {
    this.PopupParam = params.PopupParam;
    }
  }
  dosearch() {
    this.BeginSearch = true;
  }
  getOutPutParam(event) {
    this.InputValue = event;
  }
  popupclosed($event) {
    this.BeginSearch = false;
  }
  afterGuiAttached?(params?): void {
    this.inputRefElement.nativeElement.focus();
  }
}
