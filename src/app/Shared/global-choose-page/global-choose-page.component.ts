import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-global-choose-page',
  templateUrl: './global-choose-page.component.html',
  styleUrls: ['./global-choose-page.component.css']
})
export class GlobalChoosePageComponent implements OnInit {
  @Input() InputParam;
  @Output() CloseChoosePage: EventEmitter<any> =
    new EventEmitter<any>();
  type: string;

  constructor() { }

  ngOnInit() {
    this.type = this.InputParam &&
      this.InputParam.RadioItems &&
      this.InputParam.RadioItems.length > 0 ? this.InputParam.RadioItems[0].type : null;
  }
  onRedioClick(type) {
    this.type = type;
  }

  OnOkClick() {
    this.CloseChoosePage.emit(this.type);
  }
  onClose() {
    this.CloseChoosePage.emit('Exit');
  }
}
