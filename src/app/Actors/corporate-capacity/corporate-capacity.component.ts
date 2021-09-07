import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { PriceListService } from 'src/app/Services/BaseService/PriceListService';
import { ActorService } from 'src/app/Services/BaseService/ActorService';
import { RefreshServices } from 'src/app/Services/BaseService/RefreshServices';
import { NgSelectVirtualScrollComponent } from 'src/app/Shared/ng-select-virtual-scroll/ng-select-virtual-scroll.component';
import { Router } from '@angular/router';
import { NumberFieldEditableComponent } from 'src/app/Shared/number-field-editable/number-field-editable.component';
@Component({
  selector: 'app-corporate-capacity',
  templateUrl: './corporate-capacity.component.html',
  styleUrls: ['./corporate-capacity.component.css']
})
export class CorporateCapacityComponent implements OnInit {
  @Output() Closed: EventEmitter<any> = new EventEmitter<any>();
  @Output() Output: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() InputParam;
  columnDef;
  rowsData = [];
  gridApi;
  PriceListTopicID;
  Note;
  StartDate;
  EndDate;
  isClicked: boolean;
  PopUpType: string;
  HaveHeader;
  HaveMaxBtn;
  startLeftPosition;
  startTopPosition;
  CheckValidate = false;
  CorporateCapacity;
  alertMessageParams = { HaveOkBtn: true, message: '', HaveYesBtn: false, HaveNoBtn: false };
  RequiredComponents = [this.StartDate, this.PriceListTopicID];
  NgSelectParams = {
    Items: [],
    bindLabelProp: 'PriceListTopicName',
    bindValueProp: 'PriceListTopicID',
    placeholder: '',
    MinWidth: '150px',
    selectedObject: null,
    loading: false,
    IsVirtualScroll: false,
    IsDisabled: false
  };
  NgSelectPriceListTopicParams = {
    bindLabelProp: 'PriceListTopiName',
    bindValueProp: 'PriceListTopicID',
    placeholder: '',
    MinWidth: '90px',
    selectedObject: null,
    loading: false,
    IsVirtualScroll: false,
    IsDisabled: false,
    DropDownMinWidth: '100px',
    type: 'price-list-topic'
  };
  PriceListTopicItems;
  constructor(private PriceList: PriceListService,
    private Actor: ActorService,
    private RefreshEquipmentTypeItems: RefreshServices,
    private router: Router
    ) {
    this.columnDef = [
      {
        headerName: 'ردیف',
        field: 'ItemNo',
        width: 70,
        resizable: true
      },
      {
        headerName: 'رسته',
        field: 'PriceListTopiName',
        cellEditorFramework: NgSelectVirtualScrollComponent,
        cellEditorParams: {
          Params: this.NgSelectPriceListTopicParams,
          Items: [],
          Owner: this
        },
        cellRenderer: 'SeRender',
        valueFormatter: function currencyFormatter(params) {
          if (params.value) {
            return params.value.PriceListTopiName;
          } else {
            return '';
          }
        },
        valueSetter: (params) => {
              if (params.newValue && params.newValue.PriceListTopiName) {
                params.data.PriceListTopicID = params.newValue.PriceListTopicID;
                params.data.PriceListTopiName = params.newValue.PriceListTopiName;
                return true;
              } else {
                params.data.PriceListTopicID = null;
                params.data.PriceListTopiName = null;
                return false;
              }
            },
        editable: true,
        width: 300,
        resizable: true
      },
      {
        headerName: 'رتبه',
        field: 'Grade',
        editable: true,
        width: 100,
        resizable: true,
        cellEditorFramework: NumberFieldEditableComponent,
        cellRenderer: 'SeRender',
        valueFormatter: function currencyFormatter(params) {
          if (params.value) {
            return params.value;
          } else {
            return '';
          }
        },
      },
      {
        headerName: 'ظرفیت تعدادی',
        field: 'Qty',
        width: 150,
        resizable: true,
        editable: true,
        HaveThousand: false,
        cellEditorFramework: NumberFieldEditableComponent,
        cellEditorParams: { IsFloat: true, MaxLength: 8, FloatMaxLength: 4 },
        cellRenderer: 'SeRender',
        valueSetter: (params) => {
          if (params.newValue) {
            // tslint:disable-next-line: radix
            params.data.Qty = params.newValue;
          }
        },
      },
      {
        headerName: 'ظرفیت ریالی',
        field: 'Amount',
        width: 150,
        resizable: true,
        editable: true,
        HaveThousand: true,
        cellEditorFramework: NumberFieldEditableComponent,
        cellRenderer: 'SeRender',
        valueFormatter: function currencyFormatter(params) {
          if (params.value) {
            return params.value;
          } else {
            return '';
          }
        },
      }
    ];
   }

ngOnInit() {
    this.PriceList.GetPriceListTopic().subscribe(res => {
      this.PriceListTopicItems = res;
      if (this.InputParam.CorporateCapacityID) {
         this.Actor.GetCorporateCapacityByID(this.InputParam.CorporateCapacityID).subscribe(ress => {
          this.CorporateCapacity = ress;
          this.NgSelectParams.selectedObject = this.CorporateCapacity.PriceListTopicID;
          this.StartDate = this.CorporateCapacity.ShortStartDate;
          this.EndDate = this.CorporateCapacity.ShortEndDate;
          this.Note = this.CorporateCapacity.Note;
          this.PriceListTopicID = this.CorporateCapacity.PriceListTopicID;
          this.rowsData = this.CorporateCapacity.CorporateCapacityDetailList;
         });
      }
    });
}
 OnEndDateChange(ADate) {
  this.EndDate =  ADate.MDate;
 }
OnStartDateChange(ADate) {
  this.StartDate = ADate.MDate;
 }
 onGridReady (params) {
  this.gridApi = params.api;
}
onSave() {
  if (this.StartDate && this.PriceListTopicID) {
       const CorateCapacityDetailList = [];
       this.gridApi.stopEditing();
       const CorporateCapacityObj = {
            // tslint:disable-next-line:max-line-length
            CorporateCapacityID: this.CorporateCapacity && this.CorporateCapacity.CorporateCapacityID ? this.CorporateCapacity.CorporateCapacityID : -1  ,
            StartDate: this.StartDate,
            EndDate: this.EndDate,
            Note: this.Note,
            PriceListTopicID: this.PriceListTopicID,
  };

  this.gridApi.forEachNode(node => {
    const CorateCapacityDetailObj = {
      CorporateCapacityDetailID: node.data.CorporateCapacityDetailID ? node.data.CorporateCapacityDetailID : -1,
      CorporateCapacityID: CorporateCapacityObj.CorporateCapacityID,
      Qty: parseFloat(node.data.Qty),
      Amount: parseFloat(node.data.Amount),
      Grade: parseFloat(node.data.Grade),
      PriceListTopicID: node.data.PriceListTopicID,
    };
    CorateCapacityDetailList.push(CorateCapacityDetailObj);
  });
  this.Actor.SaveCorateCapacity(this.InputParam.ModuleCode,
    CorporateCapacityObj,
    CorateCapacityDetailList,
  ).subscribe((res: any) => {
    this.Output.emit(true);
    this.ShowMessageBoxWithOkBtn('ثبت با موفقیت انجام شد');
  },
    err => {
        this.ShowMessageBoxWithOkBtn('ثبت با شکست مواجه شد');
    });
  } else {
    this.ShowMessageBoxWithOkBtn('لطفا موارد ضروری را تکمیل نمایید');
  }

}
onClose() {
  this.Closed.emit(true);
}
onChangePriceListTopic(event) {
  this.PriceListTopicID = event;
}

onContractcellEditingStarted(event) {
  if (event.colDef && event.colDef.field === 'PriceListTopiName') {
    this.PriceList.GetPriceListChildrenSecondLevel(this.PriceListTopicID).subscribe(res => {
      this.RefreshEquipmentTypeItems.RefreshItemsVirtualNgSelect({
        List: res,
        type: 'price-list-topic'
      });
    });
  }

}
ShowMessageBoxWithOkBtn(message) {
  this.isClicked = true;
  this.PopUpType = 'message-box';
  this.HaveHeader = true;
  this.HaveMaxBtn = false;
  this.startLeftPosition = 530;
  this.startTopPosition = 200;
  this.alertMessageParams.message = message;
  this.alertMessageParams.HaveOkBtn = true;
  this.alertMessageParams.HaveYesBtn = false;
  this.alertMessageParams.HaveNoBtn = false;
}
popupclosed(event) {
  this.isClicked = false;
  this.HaveMaxBtn = false;
}
}
