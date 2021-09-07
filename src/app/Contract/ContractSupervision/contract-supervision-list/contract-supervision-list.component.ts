import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs';
import { isUndefined } from 'util';
import { ContractSupervisionService } from 'src/app/Services/ContractService/ContractSupervision/ContractSupervisionService';
import { UserSettingsService } from 'src/app/Services/BaseService/UserSettingsService';

@Component({
  selector: 'app-contract-supervision-list',
  templateUrl: './contract-supervision-list.component.html',
  styleUrls: ['./contract-supervision-list.component.css']
})

export class ContractSupervisionListComponent implements OnInit {

  @Input() PopupParam;
  @Input() PopupMaximized;
  @Input() ModuleCode;
  @Output() Closed: EventEmitter<boolean> = new EventEmitter<boolean>();
  isClicked: boolean;
  type: string;
  SelectedContractID: any;
  SelectedCostFactorID: any;
  ContractOperationID: any;
  columnDef;
  gridApi: any;
  rowData: any;
  DivHeight = 70;
  FinYearCode: any;
  ContractCode: any;
  ContractTypeName: any;
  LetterNo: any;
  ContractAmount: any;
  ContractorName: any;
  FromContractDatePersian: any;
  ToContractDatePersian: any;
  Subject: any;
  CnrtSupervisionCode: any;
  SelectedContractPayCostFactorID: any;
  PopUpType;
  IsDisable = true;
  PriceListPatternID;
  startLeftPosition = 59;
  startTopPosition = 20;
  SelectedCnrtSupervisionID;
  CostListFinYearCode;
  PriceListTypeCode;
  mainBodyHeight = 500;
  gridHeight = 76.5;
  HaveMaxBtn = false;
  ContractMinutesID: any;
  ContractMinutesPopupParam = {
    SelectedContractID: -1,
    SelectedCnrtSupervisionID: 0,
    SelectedCostFactorID: -1,
    CnrtSupervisionCode: 0,
    PriceListPatternID: -1,
    CostListFinYearCode: -1,
    PriceListTypeCode: -1,
    IsViewable: false,
    Mode: '',
    HeaderName: '',
    selectedRow: null,
    GridHeightInTab: 0,
    PanelHeightInTab: 0,
    HaveSave: false,
    IsEditable: false,
    ProductRequestID: null,
    ModuleCode: -1,
    ModuleViewTypeCode: null,
  };
  IsEditable = true;
  HaveSave = false;
  HaveDelete = false;
  HaveUpdate = false;
  OverPixelWidth: number;
  MinHeightPixel: number;
  HeightPercentWithMaxBtn: number;
  HaveHeader: boolean;
  Showable = true;

  constructor(private User: UserSettingsService,
    private ConSupervisionService: ContractSupervisionService,
  ) {
    this.columnDef = [
      {
        headerName: 'ردیف',
        field: 'ItemNo',
        width: 70,
        resizable: true
      },

      {
        headerName: 'شماره نظارت',
        field: 'CnrtSupervisionCode',
        width: 150,
        resizable: true
      },
      {
        headerName: 'تاریخ نظارت',
        field: 'ContractSupervisionDatePersian',
        width: 150,
        resizable: true
      },
      {
        headerName: 'توضیحات',
        field: 'Note',
        width: 600,
        resizable: true
      }
    ];
  }

  ngOnInit() {

    this.User.GetModulOPByUser(2654).subscribe(res => {
      res.forEach(node => {
        switch (node.OperationCode) {

          case 7:
            this.HaveSave = true;
            break;

          case 6:
            this.HaveDelete = true;
            break;

          case 16:
            this.HaveUpdate = true;
            break;

          default:
            break;
        }

      });
    });
    if (this.PopupParam.selectedRow.data.ContractId != null) {
      const currentData = this.PopupParam.selectedRow.data;
      this.SelectedContractID = currentData.ContractId;
      this.ContractMinutesPopupParam.SelectedContractID = currentData.ContractId;
      this.ContractMinutesPopupParam.SelectedCostFactorID = currentData.CostFactorID;
      this.ContractMinutesPopupParam.SelectedCnrtSupervisionID = currentData.SelectedCnrtSupervisionID;
      this.SelectedCostFactorID = currentData.CostFactorID;
      this.FinYearCode = currentData.FinYearCode;
      this.ContractCode = currentData.ContractCode;
      this.ContractTypeName = currentData.ContractTypeName;
      this.LetterNo = currentData.LetterNo;
      this.ContractAmount = currentData.ContractAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      this.ContractorName = currentData.ContractorName;
      this.FromContractDatePersian = currentData.FromContractDatePersian;
      this.ToContractDatePersian = currentData.ToContractDatePersian;
      this.Subject = currentData.Subject;
      this.PriceListPatternID = currentData.PriceListPatternID;
      this.CostListFinYearCode = currentData.CostListFinYearCode;
      this.PriceListTypeCode = currentData.PriceListTypeCode;
      this.rowData = of([]);
      this.ConSupervisionService.GetContractSupervisionList(this.SelectedContractID).subscribe(res => {
        this.rowData = res;
      });
    }
    this.IsEditable =
      this.PopupParam.ModuleCode !== 2687; // پرونده قرارداد
    if (this.PopupParam && this.PopupParam.IsEditable === false) {
      this.Showable = false;
    }
    if (this.PopupParam.ModuleViewTypeCode === 5555) {
      this.IsEditable = false;
    }
  }


  popupclosed() {
    this.HaveMaxBtn = false;
    this.isClicked = false;
    this.ConSupervisionService.GetContractSupervisionList(this.SelectedContractID).subscribe(res => {
      this.rowData = res;
    });
  }

  onClose() {
    this.Closed.emit(true);
  }

  onGridReady(params: { api: any; }) {
    this.gridApi = params.api;
  }

  RowClick(event) {
    let Count = 0;
    this.gridApi.forEachNode(node => {
      Count++;
    });
    this.SelectedCnrtSupervisionID = event.data.CnrtSupervisionID;
    this.CnrtSupervisionCode = event.data.CnrtSupervisionCode;
    if (event.rowIndex === Count - 1) { this.IsDisable = false; } else { this.IsDisable = true; }
  }

  onInsert() {
    this.startLeftPosition = 59;
    this.startTopPosition = 20;
    this.PopUpType = 'contract-supervision-item-list';
    this.ContractMinutesPopupParam.Mode = 'InsertMode';
    this.isClicked = true;
    this.HaveMaxBtn = true;
    this.ContractMinutesPopupParam.SelectedCnrtSupervisionID = -1,
      this.ContractMinutesPopupParam.PriceListPatternID = this.PriceListPatternID;
    this.ContractMinutesPopupParam.CostListFinYearCode = this.CostListFinYearCode;
    this.ContractMinutesPopupParam.PriceListTypeCode = this.PriceListTypeCode;
    this.ContractMinutesPopupParam.IsViewable = false;
  }

  onEdit(isViewable: boolean) {
    this.HaveMaxBtn = true;
    this.startLeftPosition = 59;
    this.startTopPosition = 20;
    this.ContractMinutesPopupParam.Mode = 'EditMode';
    this.isClicked = true;
    this.ContractMinutesPopupParam.SelectedCnrtSupervisionID = this.SelectedCnrtSupervisionID;
    this.ContractMinutesPopupParam.PriceListPatternID = this.PriceListPatternID;
    this.ContractMinutesPopupParam.CostListFinYearCode = this.CostListFinYearCode;
    this.ContractMinutesPopupParam.PriceListTypeCode = this.PriceListTypeCode;
    this.ContractMinutesPopupParam.IsViewable = isViewable;
    this.PopUpType = 'contract-supervision-item-list';
  }

  onDelete() {
    this.ConSupervisionService.DeleteContractSupervision(this.SelectedCnrtSupervisionID).subscribe(
      res => {
        this.ngOnInit();
      }
    );
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes): void {
    if (changes.PopupMaximized && !isUndefined(changes.PopupMaximized.currentValue)) {
      this.gridHeight = changes.PopupMaximized.currentValue ? 76.5 : 75;
      this.mainBodyHeight = changes.PopupMaximized.currentValue ? 560 : 500;
    }
  }

  ShowContractCase() {
    this.PopUpType = 'contract-case';
    this.isClicked = true;
    this.HaveHeader = true;
    this.HaveMaxBtn = true;
    this.OverPixelWidth = 1290;
    this.startLeftPosition = 50;
    this.startTopPosition = 4;
    this.HeightPercentWithMaxBtn = 98;
    this.MinHeightPixel = 690;
    this.ContractMinutesPopupParam.HeaderName = 'صورت جلسات';
    this.ContractMinutesPopupParam.ModuleCode = this.ModuleCode;
    this.ContractMinutesPopupParam.selectedRow = this.PopupParam.selectedRow;
    this.ContractMinutesPopupParam.GridHeightInTab = 100;
    this.ContractMinutesPopupParam.PanelHeightInTab = 99;
    this.ContractMinutesPopupParam.HaveSave = false;
    this.ContractMinutesPopupParam.IsViewable = true;
    this.ContractMinutesPopupParam.IsEditable = false;
    this.ContractMinutesPopupParam.SelectedContractID = this.PopupParam.selectedRow.data.ContractId;
    this.ContractMinutesPopupParam.ProductRequestID = this.PopupParam.selectedRow.data.ProductRequestID;
    this.ContractMinutesPopupParam.ModuleViewTypeCode = 5555;
  }
}
