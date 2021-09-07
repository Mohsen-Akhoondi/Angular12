import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs';
import { ContractPayService } from 'src/app/Services/ContractService/ContractPayServices/ContractPayService';
import { ContractPayDetailsService } from 'src/app/Services/ContractService/Contract_Pay/ContractPayDetailsService';
import { isUndefined } from 'util';
import { ContractPayShipmentService } from 'src/app/Services/ContractService/Contract_Pay/ContractPayShipmentService';
import { CartableServices } from 'src/app/Services/WorkFlowService/CartableServices';
import { UserSettingsService } from 'src/app/Services/BaseService/UserSettingsService';
import { WorkflowService } from 'src/app/Services/WorkFlowService/WorkflowServices';
import { ReportService } from 'src/app/Services/ReportService/ReportService';
import { environment } from 'src/environments/environment';
import { ContractListService } from 'src/app/Services/BaseService/ContractListService';

@Component({
  selector: 'app-contract-pay-list',
  templateUrl: './contract-pay-list.component.html',
  styleUrls: ['./contract-pay-list.component.css']
})
export class ContractPayListComponent implements OnInit {
  @Input() PopupParam;
  @Input() PopupMaximized;
  @Input() ModuleCode;
  @Output() ContractEstimateClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  isClicked: boolean;
  type: string;
  SelectedContractID: any;
  SelectedCostFactorID: any;
  ContractOperationID: any;
  ContractOperationName;
  columnDef;
  gridApi: any;
  currentRowIndex = -1;
  currentRowCount = -1;
  rowData: any;
  DivHeight = 70;
  FinYearCode: any;
  ContractCode: any;
  ContractTypeName: any;
  ContractTypeCode: any;
  HaveHeader = true;
  alertMessageParams = { HaveOkBtn: true, message: '', HaveYesBtn: false, HaveNoBtn: false };
  LetterNo: any;
  LetterDatePersian;
  ContractAmount: any;
  ContractorName: any;
  FromContractDatePersian: any;
  ToContractDatePersian: any;
  Subject: any;
  ContractPayNo: any;
  PopUpType;
  IsNotWorkFlow = true;
  IsEndRow = true;
  PriceListPatternID;
  startLeftPosition = 59;
  startTopPosition = 20;
  PixelWidth;
  PixelHeight;
  SelectedCPCostFactorID;
  CostListFinYearCode;
  PriceListTypeCode;
  PriceListFineYearName;
  mainBodyHeight = 500;
  gridHeight = 76;
  HaveMaxBtn = false;
  HaveSave = false;
  HaveUpdate = false;
  HaveDelete = false;
  IsRowClick = false;
  SelectedContractPayID;
  ContractNo;
  OrderNo;
  ContractPayDatePersian;
  ContractPayTechnicalCode;
  ContractPayPopupParam = {
    SelectedContractID: -1,
    ContractOperationID: 0,
    ContractOperationName: '',
    SelectedCostFactorID: -1,
    SelectedContractPayID: -1,
    ContractPayNo: 0,
    SelectedCPCostFactorID: -1,
    PriceListPatternID: -1,
    CostListFinYearCode: -1,
    PriceListTypeCode: -1,
    PriceListFineYearName: '',
    PriceListTypeName: '',
    IsViewable: false,
    Mode: '',
    ContractNo: '',
    ModuleViewTypeCode: null,
    FinYearCode: 0,
    ContractCode: 0,
    ContractorName: '',
    LetterDatePersian: '',
    Subject: '',
    LetterNo: '',
    ContractAmount: '',
    WorkFlowID: null,
    RegionCode: null,
    ReadyToConfirm: null,
    ContractTypeCode: -1,
    SelectedRow: null,
    ModuleCode: -1,
    HeaderName: '',
    selectedRow: null,
    GridHeightInTab: 0,
    PanelHeightInTab: 0,
    HaveSave: false,
    IsEditable: false,
    IsEditable1: false,
    ProductRequestID: null,
    IsReadOnly: false, // RFC 52262
    ContractPayDate: '',
    ContractTypeName: '',
    WorkFlowInstanceId: -1,
    ParentModuleCode: -1,
    workflowtypeStatus: -1,
    ContractPayTechnicalCode: '',
    ShowReportsSign: false,
  };
  IsEditable = true;
  IsEditable1 = true;
  IsDown = false;
  ISIRVersion = false;
  SelectedRow: any;
  IsConfirm: 0;
  OverPixelWidth: number;
  MinHeightPixel: number;
  HeightPercentWithMaxBtn: number;
  Showable = true;
  ModuleViewTypeCode: number;
  PriceListTypeName;
  WorkFlowInstanceId;
  IsAdmin = false;

  constructor(private User: UserSettingsService,
    private ShipmentService: ContractPayShipmentService,
    private ContPayService: ContractPayService,
    private ContractPayDetails: ContractPayDetailsService,
    private Cartable: CartableServices,
    private WorkFlow: WorkflowService,
    private Report: ReportService,
    private ContractList: ContractListService) {

    this.columnDef = [
      {
        headerName: 'ردیف',
        field: 'ItemNo',
        width: 70,
        resizable: true
      },
      {
        headerName: 'سال مالی',
        field: 'FinYearCode',
        width: 70,
        resizable: true
      },
      {
        headerName: 'نوع درخواست پرداخت',
        field: 'ContractPayTypeName',
        width: 100,
        resizable: true
      },
      {
        headerName: 'نوع عملیات',
        field: 'ContractOperationName',
        width: 150,
        resizable: true
      },
      {
        headerName: 'شماره صورت وضعیت',
        field: 'ContractPayTechnicalCode',
        width: 130,
        resizable: true
      },
      {
        headerName: 'شماره درخواست',
        field: 'ContractPayNo',
        width: 100,
        resizable: true
      },
      {
        headerName: 'تاریخ شروع',
        field: 'StartDatePersian',
        width: 150,
        resizable: true
      },
      {
        headerName: 'تاریخ پایان',
        field: 'EndDatePersian',
        width: 150,
        resizable: true
      },
      {
        headerName: 'تاریخ درخواست',
        field: 'CotractPayDatePersian',
        width: 150,
        resizable: true
      },
      {
        headerName: 'جمع مبلغ ناخالص',
        field: 'Amount',
        HaveThousand: true,
        width: 120,
        resizable: true
      },
      {
        headerName: 'جمع مالیات بر ارزش افزوده',
        field: 'TaxValue',
        HaveThousand: true,
        width: 140,
        resizable: true
      },
      {
        headerName: 'جمع مبلغ',
        field: 'ContractPayAmount',
        width: 100,
        HaveThousand: true,
        resizable: true
      },
      {
        headerName: 'توضیحات',
        field: 'Note',
        width: 400,
        resizable: true
      }
    ];
  }

  ngOnInit() {
    if (this.PopupParam.ModuleViewTypeCode) {
      this.ModuleViewTypeCode = this.PopupParam.ModuleViewTypeCode;
      switch (this.ModuleViewTypeCode) {
        case 100000:   /* abzar rahbar 52104 */
          break;
        default:
          break;
      }
    }
    this.ISIRVersion = environment.IsExternal;
    if (!this.PopupParam.ModuleCode || this.PopupParam.ModuleCode === 2516) {
      this.IsConfirm = 0;
    }

    if (this.PopupParam.ModuleCode && this.PopupParam.ModuleCode === 2687) {
      this.IsConfirm = null;
    }

    if (this.PopupParam.ModuleCode && this.PopupParam.ModuleCode === 2755) {
      this.HaveSave = false;
      this.HaveDelete = false;
      this.HaveUpdate = false;
      this.IsEditable = false;
    }
    this.User.GetModulOPByUser(2516).subscribe(res => {
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
    if (this.PopupParam.selectedRow && this.PopupParam.selectedRow.data && this.PopupParam.selectedRow.data.ContractId != null) {
      const currentData = this.PopupParam.selectedRow.data;
      this.SelectedContractID = currentData.ContractId;
      this.ContractPayPopupParam.SelectedContractID = currentData.ContractId;
      this.ContractPayPopupParam.RegionCode = currentData.RegionCode;
      this.ContractPayPopupParam.SelectedCostFactorID = currentData.CostFactorID ? currentData.CostFactorID : -1;
      this.ContractPayPopupParam.ContractTypeCode = currentData.ContractTypeCode;
      this.SelectedCostFactorID = currentData.CostFactorID ? currentData.CostFactorID : -1;
      this.FinYearCode = currentData.FinYearCode;
      this.ContractNo = currentData.ContractNo;
      this.ContractCode = currentData.ContractCode;
      this.ContractTypeName = currentData.ContractTypeName;
      this.ContractTypeCode = currentData.ContractTypeCode;
      this.LetterNo = currentData.LetterNo;
      this.LetterDatePersian = currentData.LetterDatePersian;
      this.ContractAmount = currentData.ContractAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      this.ContractorName = currentData.ContractorName;
      this.FromContractDatePersian = currentData.FromContractDatePersian;
      this.ToContractDatePersian = currentData.ToContractDatePersian;
      this.Subject = currentData.Subject;
      this.PriceListPatternID = currentData.PriceListPatternID;
      this.CostListFinYearCode = currentData.CostListFinYearCode;
      this.PriceListTypeCode = currentData.PriceListTypeCode;
      this.PriceListFineYearName = currentData.PriceListFineYearName;
      this.PriceListTypeName = currentData.PriceListTypeName;
      this.ContractPayNo = currentData.ContractPayNo;
      this.rowData = of([]);
      this.ContPayService.GetContractPayList(this.SelectedCostFactorID, null, null).subscribe(res => {
        this.rowData = res;
      });
      this.IsDown = true;
    } else if (this.PopupParam.SelectedContractID) {// مشاهده پرونده در فرم درخواست پرداخت
      this.ContractList.GetContractDataByID(this.PopupParam.SelectedContractID).subscribe(res => {
        const currentData = res[0];
        this.SelectedContractID = this.PopupParam.SelectedContractID;
        this.ContractPayPopupParam.SelectedContractID = currentData.ContractId;
        this.ContractPayPopupParam.RegionCode = currentData.RegionCode;
        this.ContractPayPopupParam.SelectedCostFactorID = currentData.CostFactorID ? currentData.CostFactorID : -1;
        this.ContractPayPopupParam.ContractTypeCode = currentData.ContractTypeCode;
        this.SelectedCostFactorID = currentData.CostFactorID ? currentData.CostFactorID : -1;
        this.FinYearCode = currentData.FinYearCode;
        this.ContractNo = currentData.ContractNo;
        this.ContractCode = currentData.ContractCode;
        this.ContractTypeName = currentData.ContractTypeName;
        this.ContractTypeCode = currentData.ContractTypeCode;
        this.LetterNo = currentData.LetterNo;
        this.LetterDatePersian = currentData.LetterDatePersian;
        this.ContractAmount = currentData.ContractAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        this.ContractorName = currentData.ContractorName;
        this.FromContractDatePersian = currentData.FromContractDatePersian;
        this.ToContractDatePersian = currentData.ToContractDatePersian;
        this.Subject = currentData.Subject;
        this.PriceListPatternID = currentData.PriceListPatternID;
        this.CostListFinYearCode = currentData.CostListFinYearCode;
        this.PriceListTypeCode = currentData.PriceListTypeCode;
        this.PriceListFineYearName = currentData.PriceListFineYearName;
        this.PriceListTypeName = currentData.PriceListTypeName;
        this.ContractPayNo = currentData.ContractPayNo;
        this.rowData = of([]);
        this.ContPayService.GetContractPayList(this.SelectedCostFactorID, null, null).subscribe(res => {
          this.rowData = res;
        });
        this.IsDown = true;
      });
    }
    // this.IsEditable =
    //   this.PopupParam.ModuleCode !== 2687; // پرونده قرارداد
    if (this.PopupParam && this.PopupParam.IsEditable === false) {
      this.Showable = false;
    }

    if (!isUndefined(this.PopupParam.IsEditable)) {
      this.IsEditable = this.PopupParam.IsEditable;
    }

  }

  popupclosed() {
    this.PopUpType = '';
    this.PixelWidth = null;
    this.PixelHeight = null;
    this.IsRowClick = false;
    this.HaveMaxBtn = false;
    this.isClicked = false;
    this.ContPayService.GetContractPayList(this.SelectedCostFactorID, null, null).subscribe(res => {
      this.rowData = res;
    });
  }

  onClose() {
    this.ContractEstimateClosed.emit(true);
  }

  onGridReady(params: { api: any; }) {
    this.gridApi = params.api;
  }

  RowClick(event) {
    this.IsRowClick = true;
    this.currentRowIndex = event.rowIndex;
    let Count = 0;
    this.gridApi.forEachNode(node => {
      Count++;
    });
    this.currentRowCount = Count;
    this.SelectedCPCostFactorID = event.data.CostFactorID;
    this.SelectedContractPayID = event.data.ContractPayID;
    this.ContractPayNo = event.data.ContractPayNo;
    this.ContractOperationID = event.data.ContractOperationID;
    this.ContractOperationName = event.data.ContractOperationName;
    if (event.data.IsConfirm === 0 && !event.data.IsConvert) {
      this.ContPayService.HaveWorkFlowInstance(event.data.CostFactorID, 2).subscribe(res => {
        this.IsEndRow = !res;
        this.IsNotWorkFlow = !res;
        this.gridHeight = (!this.IsNotWorkFlow &&
          this.currentRowIndex === this.currentRowCount - 1) ?
          this.PopupMaximized ? 75 : 72 :
          this.gridHeight;
      });
    } else {
      this.IsEndRow = false;
    }
    this.User.CheckIsAdmin().subscribe(res => { // RFC 54198
      if (res && this.PopupParam.ModuleCode === 2875) {
        this.IsAdmin = res;
      }
    });
    this.SelectedRow = event.data;

  }

  onInsert() {
    this.startLeftPosition = 416;
    this.startTopPosition = 89;
    // this.PixelWidth = 400;
    // this.PixelHeight = 245;
    this.PopUpType = 'contract-pay-types';
    this.isClicked = true;
    this.ContractPayPopupParam.IsViewable = false;
    this.ContractPayPopupParam.FinYearCode = this.FinYearCode;
    this.ContractPayPopupParam.ContractCode = this.ContractCode;
    this.ContractPayPopupParam.ContractorName = this.ContractorName;
    this.ContractPayPopupParam.LetterNo = this.LetterNo;
    this.ContractPayPopupParam.ContractAmount = this.ContractAmount;
    this.ContractPayPopupParam.Subject = this.Subject;
    this.ContractPayPopupParam.LetterDatePersian = this.LetterDatePersian;
    this.ContractPayPopupParam.IsReadOnly = this.PopupParam.selectedRow.data.IsReadOnly; // RFC 52262
    this.ContractPayPopupParam.ModuleViewTypeCode = this.PopupParam.ModuleViewTypeCode;
  }

  onEdit(isViewable: boolean) {
    if (!this.IsRowClick) {
      this.ShowMessageBoxWithOkBtn(' ردیفی جهت انتخاب نشده است');
      return;
    }

    this.HaveMaxBtn = true;
    this.startLeftPosition = 100;
    this.startTopPosition = 10;
    this.ContractPayPopupParam.Mode = 'EditMode';
    this.ContractPayPopupParam.SelectedCPCostFactorID = this.SelectedCPCostFactorID;
    this.ContractPayPopupParam.SelectedContractPayID = this.SelectedContractPayID;
    this.ContractPayPopupParam.PriceListPatternID = this.PriceListPatternID;
    this.ContractPayPopupParam.CostListFinYearCode = this.CostListFinYearCode;
    this.ContractPayPopupParam.PriceListTypeCode = this.PriceListTypeCode;
    this.ContractPayPopupParam.PriceListFineYearName = this.PriceListFineYearName;
    this.ContractPayPopupParam.PriceListTypeName = this.PriceListTypeName;
    this.ContractPayPopupParam.IsViewable = isViewable;
    this.ContractPayPopupParam.FinYearCode = this.FinYearCode;
    this.ContractPayPopupParam.ContractCode = this.ContractCode;
    this.ContractPayPopupParam.ContractorName = this.ContractorName;
    this.ContractPayPopupParam.LetterNo = this.LetterNo;
    this.ContractPayPopupParam.LetterDatePersian = this.LetterDatePersian;
    this.ContractPayPopupParam.ContractAmount = this.ContractAmount;
    this.ContractPayPopupParam.Subject = this.Subject;
    this.ContractPayPopupParam.ContractOperationID = this.ContractOperationID;
    this.ContractPayPopupParam.ContractOperationName = this.ContractOperationName;
    this.ContractPayPopupParam.IsReadOnly = this.PopupParam.selectedRow.data.IsReadOnly; // RFC 52262
    this.ContractPayPopupParam.selectedRow = this.PopupParam.selectedRow.data;
    this.ContractPayPopupParam.ModuleViewTypeCode = this.PopupParam.ModuleViewTypeCode;

    if (this.ContractOperationID === 1 || this.ContractOperationID === 2) {
      this.startLeftPosition = 280;
      this.startTopPosition = 90;
      this.PixelWidth = 900;
      this.PixelHeight = 320;
      this.ContractPayPopupParam.IsEditable1 = false;
      this.PopUpType = 'pre-pay';
      this.isClicked = true;
      return;
    } else if (this.ContractOperationID === 3 || this.ContractOperationID === 4) {
      this.isClicked = true;
      if (this.ContractTypeCode === 26 || this.ContractTypeCode === 29) {
        this.PopUpType = 'contract-pay-item-hour';
        return;
      }
      if (this.ContractTypeCode === 27 || this.ContractTypeCode === 28) {
        this.PopUpType = 'contract-pay-details';
        this.ContractPayPopupParam.ShowReportsSign = true;
        return;
      }
      if (!this.PriceListPatternID) {
        this.PopUpType = 'contract-pay-details';
        this.ContractPayPopupParam.ShowReportsSign = true;
        return;
      }
      if (this.PriceListPatternID &&
        this.ContractTypeCode !== 26 && this.ContractTypeCode !== 29) {
        this.PopUpType = 'contract-pay-item-estimate-page';
        return;
      }
    }
  }

  onDelete() {
    this.ContractPayDetails.DeleteContractPay(this.SelectedCPCostFactorID).subscribe(
      res => {
        this.ngOnInit();
      }
    );
  }

  onPrint() {
    this.startLeftPosition = 400;
    this.startTopPosition = 120;
    this.ContractPayPopupParam.SelectedCostFactorID = this.SelectedCostFactorID;
    this.ContractPayPopupParam.SelectedCPCostFactorID = this.SelectedCPCostFactorID;
    this.ContractPayPopupParam.SelectedContractID = this.SelectedContractID;
    this.ContractPayPopupParam.ContractPayNo = this.ContractPayNo;
    this.ContractPayPopupParam.ContractCode = this.ContractCode;
    this.ContractPayPopupParam.ContractorName = this.ContractorName;
    this.ContractPayPopupParam.Subject = this.Subject;
    this.ContractPayPopupParam.SelectedRow = this.SelectedRow;
    this.ContractPayPopupParam.ModuleCode = this.PopupParam.ModuleCode;
    this.ContractPayPopupParam.RegionCode = this.PopupParam.RegionCode;
    this.isClicked = true;
    this.PixelWidth = null;
    this.PopUpType = 'choosen-contract-pay-rep';
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes): void {
    if (changes.PopupMaximized && !isUndefined(changes.PopupMaximized.currentValue)) {
      this.gridHeight = (!this.IsNotWorkFlow &&
        this.currentRowIndex === this.currentRowCount - 1) ?
        changes.PopupMaximized.currentValue ? 75 : 72 :
        changes.PopupMaximized.currentValue ? 78 : 75;
      this.mainBodyHeight = changes.PopupMaximized.currentValue ? 560 : 500;
    }
  }

  ReturendContractOperation(type) {
    this.ContractOperationID = type;
    this.startLeftPosition = 100;
    this.startTopPosition = 10;
    this.PixelWidth = null;
    this.PixelHeight = null;
    if (this.ContractOperationID && this.PopUpType === 'contract-pay-types'
      && (this.ContractOperationID === '3' || this.ContractOperationID === '4')
      && (this.ContractTypeCode === 26 || this.ContractTypeCode === 29)) {
      this.ContractPayPopupParam.ContractOperationID = this.ContractOperationID;
      this.ContractPayPopupParam.PriceListPatternID = this.PriceListPatternID;
      this.ContractPayPopupParam.CostListFinYearCode = this.CostListFinYearCode;
      this.ContractPayPopupParam.PriceListTypeCode = this.PriceListTypeCode;
      this.ContractPayPopupParam.PriceListFineYearName = this.PriceListFineYearName;
      this.ContractPayPopupParam.PriceListTypeName = this.PriceListTypeName;
      this.ContractPayPopupParam.SelectedCPCostFactorID = -1;
      this.ContractPayPopupParam.selectedRow = this.PopupParam.selectedRow.data;
      this.PopUpType = 'contract-pay-item-hour';
      this.HaveMaxBtn = true;
      // tslint:disable-next-line: radix
      this.ContractPayPopupParam.ContractOperationID = parseInt(this.ContractOperationID);
      this.ContractPayPopupParam.Mode = 'InsertMode';
      return;
    }
    if (this.ContractOperationID && this.PopUpType === 'contract-pay-types'
      && (this.ContractOperationID === '3' || this.ContractOperationID === '4')
      && (this.ContractTypeCode === 27 || this.ContractTypeCode === 28)) {
      this.ContractPayPopupParam.ContractOperationID = this.ContractOperationID;
      this.ContractPayPopupParam.selectedRow = this.PopupParam.selectedRow.data;
      this.PopUpType = 'contract-pay-details';
      this.HaveMaxBtn = true;
      // tslint:disable-next-line: radix
      this.ContractPayPopupParam.ContractOperationID = parseInt(this.ContractOperationID);
      this.ContractPayPopupParam.Mode = 'InsertMode';
      return;
    }
    if (!this.PriceListPatternID && this.ContractOperationID && (this.ContractOperationID === '3' || this.ContractOperationID === '4')
      && this.PopUpType === 'contract-pay-types') {
      this.ContractPayPopupParam.ContractOperationID = this.ContractOperationID;
      this.ContractPayPopupParam.selectedRow = this.PopupParam.selectedRow.data;
      this.PopUpType = 'contract-pay-details';
      this.HaveMaxBtn = true;
      // tslint:disable-next-line: radix
      this.ContractPayPopupParam.ContractOperationID = parseInt(this.ContractOperationID);
      this.ContractPayPopupParam.Mode = 'InsertMode';
      return;
    }
    if (this.PriceListPatternID && this.ContractOperationID && (this.ContractOperationID === '3' || this.ContractOperationID === '4') &&
      this.PopUpType === 'contract-pay-types' &&
      this.ContractTypeCode !== 26 &&
      this.ContractTypeCode !== 29) {
      this.ContractPayPopupParam.ContractOperationID = this.ContractOperationID;
      this.ContractPayPopupParam.PriceListPatternID = this.PriceListPatternID;
      this.ContractPayPopupParam.CostListFinYearCode = this.CostListFinYearCode;
      this.ContractPayPopupParam.PriceListTypeCode = this.PriceListTypeCode;
      this.ContractPayPopupParam.PriceListFineYearName = this.PriceListFineYearName;
      this.ContractPayPopupParam.PriceListTypeName = this.PriceListTypeName;
      this.ContractPayPopupParam.SelectedCPCostFactorID = -1;
      this.ContractPayPopupParam.selectedRow = this.PopupParam.selectedRow.data;
      this.PopUpType = 'contract-pay-item-estimate-page';
      this.HaveMaxBtn = true;
      // tslint:disable-next-line: radix
      this.ContractPayPopupParam.ContractOperationID = parseInt(this.ContractOperationID);
      this.ContractPayPopupParam.Mode = 'InsertMode';
      return;
    }
    if (this.ContractOperationID === '1' || this.ContractOperationID === '2' ||
      this.ContractOperationID === '20' || this.ContractOperationID === '21') {
      this.startLeftPosition = 280;
      this.startTopPosition = 90;
      this.PixelWidth = 900;
      this.PixelHeight = 320;
      this.ContractPayPopupParam.ContractOperationID = this.ContractOperationID;
      this.ContractPayPopupParam.CostListFinYearCode = this.CostListFinYearCode;
      this.ContractPayPopupParam.PriceListTypeCode = this.PriceListTypeCode;
      this.ContractPayPopupParam.PriceListFineYearName = this.PriceListFineYearName;
      this.ContractPayPopupParam.PriceListTypeName = this.PriceListTypeName;
      this.ContractPayPopupParam.SelectedCPCostFactorID = -1;
      this.ContractPayPopupParam.SelectedContractPayID = this.SelectedContractPayID;
      this.ContractPayPopupParam.selectedRow = this.PopupParam.selectedRow.data;
      this.ContractPayPopupParam.IsViewable = false;
      this.PopUpType = 'pre-pay';
      this.HaveMaxBtn = false;
      this.ContractPayPopupParam.Mode = 'InsertMode';
      return;
    }
    this.isClicked = true;
  }

  OnClickPrintFlow() {
    if (!this.IsRowClick) {
      this.ShowMessageBoxWithOkBtn(' ردیفی جهت مشاهده گردش انتخاب نشده است');
    } else {
      this.Report.ShowReport(null,
        null,
        this.SelectedCPCostFactorID,
        this.ContractCode,
        this.LetterNo,
        this.LetterDatePersian,
        this.Subject,
        this.ContractorName,
        null,
        null,
        2516,
        this.ContractPayPopupParam.RegionCode
      );
    }
  }

  ShowMessageBoxWithOkBtn(message) {
    this.isClicked = true;
    this.PopUpType = 'message-box';
    this.PixelWidth = null;
    this.HaveHeader = true;
    this.HaveMaxBtn = false;
    this.startLeftPosition = 449;
    this.startTopPosition = 87;
    this.alertMessageParams.message = message;
    this.alertMessageParams.HaveOkBtn = true;
    this.alertMessageParams.HaveYesBtn = false;
    this.alertMessageParams.HaveNoBtn = false;
  }
  ShowContractCase() {
    this.PopUpType = 'contract-case';
    this.PixelWidth = null;
    this.HaveHeader = true;
    this.HaveMaxBtn = true;
    this.OverPixelWidth = 1290;
    this.startLeftPosition = 35;
    this.startTopPosition = 15;
    this.HeightPercentWithMaxBtn = 98;
    this.MinHeightPixel = 630;
    this.PixelWidth = 1290;
    this.PixelHeight = 630;
    this.ContractPayPopupParam.HeaderName = this.PopupParam.HeaderName;
    this.ContractPayPopupParam.ModuleCode = this.PopupParam.ModuleCode;
    this.ContractPayPopupParam.selectedRow = this.PopupParam.selectedRow;
    this.ContractPayPopupParam.GridHeightInTab = 100;
    this.ContractPayPopupParam.PanelHeightInTab = 99;
    this.ContractPayPopupParam.HaveSave = false;
    this.ContractPayPopupParam.IsViewable = true;
    this.ContractPayPopupParam.IsEditable = false;
    this.ContractPayPopupParam.SelectedContractID = this.PopupParam.selectedRow.data.ContractId;
    this.ContractPayPopupParam.ProductRequestID = this.PopupParam.selectedRow.data.ProductRequestID;
    this.isClicked = true;
    this.ContractPayPopupParam.ModuleViewTypeCode = 5555;
  }

  OnClickWorkFlowDetail() {
    if (this.SelectedRow) {
      // tslint:disable-next-line:max-line-length
      this.WorkFlow.GetWfInstanceIDByObjIDAndRegionCode(this.SelectedCPCostFactorID, this.PopupParam.RegionCode).subscribe(res => {
        this.PixelWidth = null;
        this.WorkFlowInstanceId = res;
        this.PopUpType = 'user-work-log-details';
        this.isClicked = true;
        this.OverPixelWidth = 1290;
        this.HaveHeader = true;
        this.HaveMaxBtn = true;
        this.startLeftPosition = 40;
        this.startTopPosition = 8;
        this.HeightPercentWithMaxBtn = 98;
        this.MinHeightPixel = 640;
        this.ContractPayPopupParam.HeaderName = 'جزئیات گردش';
        this.ContractPayPopupParam.LetterNo = this.LetterNo;
        this.ContractPayPopupParam.Subject = this.Subject;
        this.ContractPayPopupParam.FinYearCode = this.FinYearCode;
        this.ContractPayPopupParam.ContractNo = this.ContractNo;
        this.ContractPayPopupParam.ContractPayDate = this.SelectedRow.ContractPayDatePersian;
        this.ContractPayPopupParam.ContractCode = this.ContractCode;
        this.ContractPayPopupParam.SelectedContractID = this.SelectedContractID;
        this.ContractPayPopupParam.ContractorName = this.ContractorName;
        this.ContractPayPopupParam.ContractTypeName = this.ContractTypeName;
        this.ContractPayPopupParam.ContractAmount = this.ContractAmount;
        this.ContractPayPopupParam.LetterDatePersian = this.LetterDatePersian;
        this.ContractPayPopupParam.workflowtypeStatus = 2;
        this.ContractPayPopupParam.WorkFlowInstanceId = this.WorkFlowInstanceId;
        this.ContractPayPopupParam.ContractPayNo = this.ContractPayNo;
        this.ContractPayPopupParam.ParentModuleCode = this.PopupParam.ModuleCode;
        this.ContractPayPopupParam.ContractPayTechnicalCode = this.SelectedRow.ContractPayTechnicalCode;
      });
    } else {
      this.ShowMessageBoxWithOkBtn(' ردیفی جهت مشاهده انتخاب نشده است');
    }
  }
}
