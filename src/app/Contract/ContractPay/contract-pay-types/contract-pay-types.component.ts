import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-contract-pay-types',
  templateUrl: './contract-pay-types.component.html',
  styleUrls: ['./contract-pay-types.component.css']
})
export class ContractPayTypesComponent implements OnInit {
  @Input() PopupParam;
  @Output() ContractPayTypesClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() PayTypesOutPutPram: EventEmitter<any> = new EventEmitter<any>();
  SelectedContractID = 0;
  constructor() { }

  ngOnInit() {
    if (this.PopupParam != null) {
      this.SelectedContractID = this.PopupParam;
  }
}

  onClose() {
      this.ContractPayTypesClosed.emit(true);
    }
    SetPayTypes(type) {
        this.PayTypesOutPutPram.emit(type);
    }
}
