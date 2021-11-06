import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { RegionListService } from 'src/app/Services/BaseService/RegionListService';
import { forkJoin } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductRequestService } from 'src/app/Services/ProductRequest/ProductRequestService';
import { CustomCheckBoxModel } from 'src/app/Shared/custom-checkbox/src/public_api';
import { NgSelectCellEditorComponent } from 'src/app/Shared/NgSelectCellEditor/ng-select-cell-editor.component';
import { NgSelectVirtualScrollComponent } from 'src/app/Shared/ng-select-virtual-scroll/ng-select-virtual-scroll.component';
import { RefreshServices } from 'src/app/Services/BaseService/RefreshServices';
import { ActorService } from 'src/app/Services/BaseService/ActorService';
import { ContractListService } from 'src/app/Services/BaseService/ContractListService';
import { OverPopUpCellEditorComponent } from 'src/app/Shared/OverPopUpcellEditor/over-pop-up-cell-editor.component';
import { CustomerOrderService } from 'src/app/Services/CRM/CustomerOrderService';
import { UserSettingsService } from 'src/app/Services/BaseService/UserSettingsService';
import { WorkflowService } from 'src/app/Services/WorkFlowService/WorkflowServices';
import { CartableServices } from 'src/app/Services/WorkFlowService/CartableServices';
import { CommonServices } from 'src/app/Services/BaseService/CommonServices';
import { JalaliDatepickerComponent } from 'src/app/Shared/jalali-datepicker/jalali-datepicker.component';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
  @Output() Closed: EventEmitter<any> = new EventEmitter<any>();
  @Input() InputParam;
  @Output() OutPutParam: EventEmitter<any> = new EventEmitter<any>();
  CustomCheckBoxConfig: CustomCheckBoxModel = new CustomCheckBoxModel();
  IsAdmin;
  ActorID;
  BTNsShow: false;
  CheckValidate = false;
  CustomerOrderID = -1;
  CheckRegionWritable = true;
  ModuleCode;
  RegionItems;
  OrderTypeItems;
  OrginalModuleCode;
  CustomerOrderDate;
  PersianOrderRequestDate;
  IsEditable;
  OrderCode = '';
  IsPerson = true;
  IsValid = false;
  columnDef;
  selectedrow: any;
  currentRegionObject;
  rowsData: any = [];
  gridApi: any;
  ProdcutTypeCode: any;
  IsRowClick = false;
  gridHeightDiv = 80;
  GridHeight = 92;
  PersonReqItems: any;
  AgentPersonReqItems: any;
  EmployerPersonReqItems: any;
  isClicked: boolean;
  PopUpType: string;
  startLeftPosition: number;
  startTopPosition: number;
  ContractPageCount;
  alertMessageParams = { HaveOkBtn: true, message: '', HaveYesBtn: false, HaveNoBtn: false };
  currentContractSearchTerm;

  ProductTypeList = [{ ProductTypeCode: 1, ProductTypeName: 'کالا' },
  { ProductTypeCode: 2, ProductTypeName: 'خدمت' }];
  NgSelectVSParams = {
    bindLabelProp: 'ProductCodeName',
    bindValueProp: 'ProductID',
    placeholder: '',
    MinWidth: '150px',
    PageSize: 30,
    PageCount: 0,
    TotalItemCount: 0,
    selectedObject: null,
    loading: false,
    IsVirtualScroll: true,
    IsDisabled: false,
    Required: false,
    type: 'PRI-product',
    DropDownMinWidth: '300px',
    AdvanceSearch: {
      SearchLabel: 'جستجو براساس :',
      SearchItemDetails:
        [{ HeaderCaption: 'کد', HeaderName: 'ProductCode', width: 40, TermLenght: 3, SearchOption: 0 },
        { HeaderCaption: 'نام', HeaderName: 'ProductName', width: 53, MinTermLenght: 3, SearchOption: 1, CanGrow: true }],
      SearchItemHeader:
        [{ HeaderCaption: 'کد', width: 40, },
        { HeaderCaption: 'نام', width: 53, }],
      HaveItemNo: true,
      ItemNoWidth: 16
    }
  };
  RegionParams = {
    bindLabelProp: 'RegionName',
    bindValueProp: 'RegionCode',
    placeholder: '',
    MinWidth: '155px',
    selectedObject: null,
    loading: false,
    IsVirtualScroll: false,
    IsDisabled: false,
    Required: true,
    type: 'region',
  };


  OrderTypeParams = {
    bindLabelProp: 'CustomerOrderTypeName',
    bindValueProp: 'CustomerOrderTypeCode',
    placeholder: '',
    MinWidth: '155px',
    selectedObject: null,
    loading: false,
    IsVirtualScroll: false,
    IsDisabled: false,
    Required: true,
    type: 'order-type',
  };

  NgSelectPersonReqParams = {
    bindLabelProp: 'ActorName',
    bindValueProp: 'ActorId',
    placeholder: '',
    MinWidth: '130px',
    PageSize: 30,
    PageCount: 0,
    TotalItemCount: 0,
    selectedObject: null,
    loading: false,
    IsVirtualScroll: true,
    IsDisabled: false,
    Required: true,
    type: 'user-person-Req-search',
    DropDownMinWidth: '300px',
    AdvanceSearch: {
      SearchLabel: 'جستجو:',
      SearchItemDetails:
        [{ HeaderCaption: 'شناسه', HeaderName: 'ActorId', width: 35, MinTermLenght: 1, SearchOption: 'ActorID' },
        { HeaderCaption: 'کد ملي', HeaderName: 'IdentityNo', width: 35, MinTermLenght: 10, SearchOption: 'IdentityNo' },
        // tslint:disable-next-line:max-line-length
        { HeaderCaption: 'نام و نام خانوادگي', HeaderName: 'ActorName', width: 53, MinTermLenght: 3, SearchOption: 'ActorName' }],
      SearchItemHeader:
        [{ HeaderCaption: 'شناسه', width: 35, },
        { HeaderCaption: 'کد ملي', width: 35, },
        { HeaderCaption: 'نام و نام خانوادگي', width: 53, }],
      HaveItemNo: true,
      ItemNoWidth: 16
    }
  };

  NgSelectAgentPersonReqParams = {
    bindLabelProp: 'ActorName',
    bindValueProp: 'ActorId',
    placeholder: '',
    MinWidth: '130px',
    PageSize: 30,
    PageCount: 0,
    TotalItemCount: 0,
    selectedObject: null,
    loading: false,
    IsVirtualScroll: true,
    IsDisabled: false,
    Required: true,
    type: 'user-agent',
    DropDownMinWidth: '300px',
    AdvanceSearch: {
      SearchLabel: 'جستجو:',
      SearchItemDetails:
        [{ HeaderCaption: 'شناسه', HeaderName: 'ActorId', width: 35, MinTermLenght: 1, SearchOption: 'ActorID' },
        { HeaderCaption: 'کد ملي', HeaderName: 'IdentityNo', width: 35, MinTermLenght: 10, SearchOption: 'IdentityNo' },
        // tslint:disable-next-line:max-line-length
        { HeaderCaption: 'نام و نام خانوادگي', HeaderName: 'ActorName', width: 53, MinTermLenght: 3, SearchOption: 'ActorName' }],
      SearchItemHeader:
        [{ HeaderCaption: 'شناسه', width: 35, },
        { HeaderCaption: 'کد ملي', width: 35, },
        { HeaderCaption: 'نام و نام خانوادگي', width: 53, }],
      HaveItemNo: true,
      ItemNoWidth: 16
    }
  };

  NgSelectEmployerPersonReqParams = {
    bindLabelProp: 'ActorName',
    bindValueProp: 'ActorId',
    placeholder: '',
    MinWidth: '130px',
    PageSize: 30,
    PageCount: 0,
    TotalItemCount: 0,
    selectedObject: null,
    loading: false,
    IsVirtualScroll: true,
    IsDisabled: false,
    Required: true,
    type: 'employer-agent',
    DropDownMinWidth: '300px',
    AdvanceSearch: {
      SearchLabel: 'جستجو:',
      SearchItemDetails:
        [{ HeaderCaption: 'شناسه', HeaderName: 'ActorId', width: 35, MinTermLenght: 1, SearchOption: 'ActorID' },
        { HeaderCaption: 'کد ملي', HeaderName: 'IdentityNo', width: 35, MinTermLenght: 10, SearchOption: 'IdentityNo' },
        // tslint:disable-next-line:max-line-length
        { HeaderCaption: 'نام و نام خانوادگي', HeaderName: 'ActorName', width: 53, MinTermLenght: 3, SearchOption: 'ActorName' }],
      SearchItemHeader:
        [{ HeaderCaption: 'شناسه', width: 35, },
        { HeaderCaption: 'کد ملي', width: 35, },
        { HeaderCaption: 'نام و نام خانوادگي', width: 53, }],
      HaveItemNo: true,
      ItemNoWidth: 16
    }
  };
  NgSelectContractEntityItemParams = {
    bindLabelProp: 'Subject',
    bindValueProp: 'EntityTypeItemID',
    placeholder: '',
    MinWidth: '200px',
    selectedObject: null,
    loading: false,
    IsVirtualScroll: false,
    IsDisabled: false,
    DropDownMinWidth: '100px',
    type: 'entity-item',
  };

  CustomerOrderCode: any;
  Subject;
  FromContractTotalItemCount;
  FromContractPageCount;
  NgSelectContractParamsFrom = {
    Items: [],
    bindLabelProp: 'Subject',
    bindValueProp: 'ContractId',
    MinWidth: '130px',
    DropDownMinWidth: '320px',
    selectedObject: null,
    loading: false,
    IsVirtualScroll: true,
    IsDisabled: false,
    PageSize: 30,
    PageCount: 0,
    TotalItemCount: 0,
    Required: true,
    type: 'User-Work-Log',
    AdvanceSearch: {
      SearchLabel: 'جستجو:',
      SearchItemDetails:
        [{ HeaderCaption: 'شماره قرارداد', HeaderName: 'LetterNo', width: 35, MinTermLenght: 1, SearchOption: 'LetterNo' },
        { HeaderCaption: 'موضوع', HeaderName: 'Subject', width: 53, SearchOption: 'Subject', MinTermLenght: 3 },
        { HeaderCaption: 'کد قرارداد', HeaderName: 'ContractCode', width: 35, MinTermLenght: 1, SearchOption: 'ContractCode' }],
      SearchItemHeader:
        [{ HeaderCaption: 'شماره قرارداد', width: 35, },
        { HeaderCaption: 'موضوع', width: 53, },
        { HeaderCaption: 'کد قرارداد', width: 35, }],
      HaveItemNo: true,
      ItemNoWidth: 16
    }
  };
  RequiredComponents = [this.OrderTypeParams, this.NgSelectPersonReqParams, this.NgSelectAgentPersonReqParams];

  ContractListSetFrom = [];
  CustomerOrderObject: any;
  RegionGroupCode: any;
  btnConfirmName;
  btnConfirmIcon;
  IsEndFlow: any;
  ReadyToConfirm: any;
  WorkflowTypeCode: any;
  WorkflowTypeName: any;
  WorkflowObjectCode: any;
  ObjectNo: any;
  ObjectID: any;
  WorkFlowID: any;
  ModuleViewTypeCode = null;
  CurrWorkFlow: any;
  CartableUserID: any;
  HaveAlertToFinance: any;
  BtnClickedName: string;
  ChangeDetection: any;
  IsDown: boolean;
  PopupParam;
  MinimumPosting: any;
  WorkFlowTransitionID: any;
  btnConfirmAndReturnName = 'عدم تایید و بازگشت';
  MinHeightPixel: number;
  HeightPercentWithMaxBtn: number;
  PercentWidth: number;
  MainMaxwidthPixel: number;
  HaveMaxBtn: boolean;

  constructor(private RegionList: RegionListService,
    private ActorList: ActorService,
    private route: ActivatedRoute,
    private User: UserSettingsService,
    private ProductRequest: ProductRequestService,
    private RefreshPersonItems: RefreshServices,
    private ContractList: ContractListService,
    private CustomerOrder: CustomerOrderService,
    private FlowService: WorkflowService,
    private Cartable: CartableServices,
    private CommonService: CommonServices,
    // private RefreshCartable: RefreshServices,
  ) {
    this.route.params.subscribe(params => {
      this.ModuleCode = +params['ModuleCode'];
      this.OrginalModuleCode = +params['ModuleCode'];
    });


  }


  ngOnInit() {
    this.CustomCheckBoxConfig.color = 'state p-primary';
    this.CustomCheckBoxConfig.icon = 'fa fa-check';
    this.CustomCheckBoxConfig.styleCheckBox = 'pretty p-icon p-rotate';
    this.CustomCheckBoxConfig.AriaWidth = 6;

    if (this.InputParam) {
      this.CurrWorkFlow = this.InputParam.CurrWorkFlow;  
      this.CustomerOrderID = this.InputParam.CustomerOrderID;
      this.IsEndFlow = this.InputParam.IsEnd === 1;
      this.ReadyToConfirm = this.CurrWorkFlow.ReadyToConfirm;
      this.WorkflowTypeName = this.CurrWorkFlow.WorkflowTypeName;
      this.WorkflowTypeCode = this.CurrWorkFlow.WorkflowTypeCode;
      this.WorkflowObjectCode = this.CurrWorkFlow.WorkflowObjectCode;
      this.ObjectNo = this.CurrWorkFlow.ObjectNo;
      this.ObjectID = this.CurrWorkFlow.ObjectID;
      this.WorkFlowID = this.CurrWorkFlow.WorkFlowID;
      this.ModuleViewTypeCode = this.InputParam.ModuleViewTypeCode;
      this.BTNsShow = this.InputParam.BTNs;
      
      this.CartableUserID = this.CurrWorkFlow.CartableUserID;
      this.MinimumPosting = this.CurrWorkFlow.MinimumPosting;
    }

    if (!this.IsEndFlow && (!this.ReadyToConfirm || this.ReadyToConfirm === null || this.ReadyToConfirm === 0)) {
      this.btnConfirmName = 'تایید';
      this.btnConfirmIcon = 'ok';
      // this.HaveConfirm = true;
    }

    if (!this.IsEndFlow && this.ReadyToConfirm && this.ReadyToConfirm !== null && this.ReadyToConfirm === 1) {
      this.btnConfirmName = 'عدم تایید';
      this.btnConfirmIcon = 'cancel';
      // this.HaveConfirm = true;
    }

    if (this.IsEndFlow && this.ReadyToConfirm && this.ReadyToConfirm !== null && this.ReadyToConfirm === 1) {
      this.btnConfirmName = 'بازگشت از تایید نهایی';
      this.btnConfirmIcon = 'cancel';
      // this.HaveConfirm = true;
    }

    if (this.IsEndFlow && (!this.ReadyToConfirm || this.ReadyToConfirm === null || this.ReadyToConfirm === 0)) {
      this.btnConfirmName = 'تایید نهایی';
      this.btnConfirmIcon = 'ok';
      // this.HaveConfirm = true;
    }

    forkJoin([
      this.RegionList.GetRegionList(this.ModuleCode, !this.CheckRegionWritable),
      this.CustomerOrder.GetOrderTypeList(),
      this.CustomerOrder.GetCustomerOrder(this.CustomerOrderID),
      this.User.CheckAdmin(),
      this.User.GetActiveActorID(),


    ]).subscribe((res: any) => {
      this.RegionItems = res[0];
      this.OrderTypeItems = res[1];
      this.CustomerOrderObject = res[2];
      this.IsAdmin = res[3];
      if (this.CustomerOrderObject && this.CustomerOrderObject.CustomerOrderID > 0) {
        this.CustomerOrderDate = this.CustomerOrderObject.ShortCustomerOrderDate;
        this.Subject = this.CustomerOrderObject.Subject;
        this.CustomerOrderCode = this.CustomerOrderObject.CustomerOrderCode;
        this.IsValid = this.CustomerOrderObject.IsValid;
        this.RegionParams.selectedObject = this.CustomerOrderObject.RegionCode;
        this.OrderTypeParams.selectedObject = this.CustomerOrderObject.CustomerOrderTypeCode;
        this.rowsData = this.CustomerOrderObject.CustomerOrderItemList;
        this.IsPerson = this.CustomerOrderObject.IsPerson;
        this.PersonReqOpened(this.CustomerOrderObject.CustomerID);
        this.AgentPersonReqOpened(this.CustomerOrderObject.AgentID);
        this.EmployerPersonReqOpened(this.CustomerOrderObject.EmployerID);
        this.FromContractOpened(this.CustomerOrderObject.ContractID);
        this.NgSelectPersonReqParams.selectedObject = this.CustomerOrderObject.CustomerID;
        this.NgSelectAgentPersonReqParams.selectedObject = this.CustomerOrderObject.AgentID;
        this.NgSelectEmployerPersonReqParams.selectedObject = this.CustomerOrderObject.EmployerID;
        this.NgSelectContractParamsFrom.selectedObject = this.CustomerOrderObject.ContractID;
        this.SetEntityDataInDataRow(this.rowsData);
        this.rowsData.forEach(element => {
          this.EntityColumnDefinition(null, null, element.EntityList, false);
        });
      } else {
        this.ProductRequest.GetCurrentDate().subscribe(resss => {
          this.CustomerOrderDate = resss;
        });
        this.ActorID = res[4].ActorID;
        this.IsPerson = res[4].IsPerson;
        if (this.IsPerson) {
          this.NgSelectAgentPersonReqParams.selectedObject = this.ActorID;
          this.AgentPersonReqOpened(this.ActorID);
        }
        else {
          this.ProductRequest.GetCurrentDate().subscribe(resss => {
            this.CustomerOrderDate = resss;
          });
          this.ActorList.GetAgentActorID(this.ActorID, this.CustomerOrderDate).subscribe((res: any) => {
            this.NgSelectAgentPersonReqParams.selectedObject = res;
            this.AgentPersonReqOpened(res);

          })
        }
        this.NgSelectPersonReqParams.selectedObject = this.ActorID;
        this.PersonReqOpened(this.ActorID);
      }
    });
  }

  SetStartedWFInfo(Resolve) {
    this.FlowService.GetStartModuleViewTypeCode(200,
      this.ModuleCode,
      this.WorkflowTypeCode,
      this.CustomerOrderID).subscribe(res => {
        if (res) {
          this.ModuleViewTypeCode = this.ModuleViewTypeCode ? this.ModuleViewTypeCode : (res as any).ModuleViewTypeCode;
          this.WorkflowObjectCode = this.WorkflowObjectCode ? this.WorkflowObjectCode : (res as any).WorkflowObjectCode;
          this.WorkFlowID = this.WorkFlowID ? this.WorkFlowID : (res as any).WorkFlowLogID;
          this.WorkflowTypeName = this.WorkflowTypeName ? this.WorkflowTypeName : (res as any).WorkFlowTypeName;
          this.WorkflowTypeCode = this.WorkflowTypeCode ? this.WorkflowTypeCode : (res as any).WorkFlowTypeCode;
          this.CurrWorkFlow = this.CurrWorkFlow ? this.CurrWorkFlow : (res as any).CurrWorkFlowObject;
          // tslint:disable-next-line:max-line-length
          this.CartableUserID = this.CartableUserID ? this.CartableUserID : (res as any).CurrWorkFlowObject ? (res as any).CurrWorkFlowObject.CartableUserID : null;
        }
        Resolve();
      });
  }

  FetchMoreProduct(event) {
    event.Owner.columnDef[2].cellEditorParams.Params.loading = true;
    const ResultList = [];
    // tslint:disable-next-line: no-shadowed-variable
    const promise = new Promise((resolve, reject) => {
      event.Owner.ProductRequest.GetProductList(event.SearchOption,
        event.Owner.RegionParams.selectedObject,
        event.term,
        event.PageNumber,
        event.PageSize,
        event.Owner.ProdcutTypeCode,
        true,
        null).
        subscribe(res => {
          event.CurrentItems.forEach(el => {
            ResultList.push(el);
          });
          res.List.forEach(element => {
            ResultList.push(element);
          });
          resolve(res.TotalItemCount);
        });
    }).then((TotalItemCount: number) => {
      event.Owner.RefreshPersonItems.RefreshItemsVirtualNgSelect({
        List: ResultList,
        term: event.term,
        TotalItemCount: TotalItemCount,
        PageCount: Math.ceil(TotalItemCount / 30),
        type: 'PRI-product'
      });
    });
  }

  FetchProductByTerm(event) {
    event.Owner.columnDef[2].cellEditorParams.Params.loading = true;
    event.Owner.ProductRequest.GetProductList(event.SearchOption,
      event.Owner.RegionParams.selectedObject,
      event.term,
      event.PageNumber,
      event.PageSize,
      event.Owner.ProdcutTypeCode,
      true,
      null).
      subscribe(res => {
        event.Owner.RefreshPersonItems.RefreshItemsVirtualNgSelect({
          List: res.List,
          term: event.term,
          TotalItemCount: res.TotalItemCount,
          PageCount: Math.ceil(res.TotalItemCount / 30),
          type: 'PRI-product'
        });
      });
  }

  RedioSelectedChange(event) {
    event.Owner.columnDef[2].cellEditorParams.Params.loading = true;
    event.Owner.ProductRequest.GetProductList(event.SearchOption,
      event.Owner.RegionParams.selectedObject,
      // tslint:disable-next-line:max-line-length
      '',
      1,
      30,
      event.Owner.ProdcutTypeCode,
      true,
      null).
      subscribe(res => {
        event.Owner.columnDef[2].cellEditorParams.Params.loading = false;
        event.Owner.RefreshPersonItems.RefreshItemsVirtualNgSelect({
          List: res.List,
          TotalItemCount: res.TotalItemCount,
          PageCount: Math.ceil(res.TotalItemCount / 30),
          type: 'PRI-product'
        });
      });
  }

  EntityColumnDefinition(ProductID, node, EntityList, hasApiCall) {

    if (ProductID && hasApiCall) {

      this.ProductRequest.GetProductRequestEntityList(null, ProductID, null).subscribe(
        res => {

          var columnDef22 = [];
          this.columnDef.forEach(element => {
            columnDef22.push(element);
          });
          this.columnDef = [];

          node.data.EntityList = res;
          res.forEach(i => {
            const obItem = columnDef22.find(x => x.index && x.index === i.EntityTypeID);
            if (!obItem) {
              const obj = {
                index: i.EntityTypeID,
                headerName: i.Subject,
                field: 'Subject' + i.EntityTypeID.toString(),
                width: 200,
                editable: true,
                resizable: true,
                cellEditorFramework: NgSelectVirtualScrollComponent,
                cellEditorParams: {
                  Params: this.NgSelectContractEntityItemParams,
                  Items: [],
                  Owner: this
                },
                cellRenderer: 'SeRender',
                valueFormatter: function currencyFormatter(params) {
                  if (params.value) {
                    return params.value.Subject;
                  } else {
                    return '';
                  }
                },
              };
              columnDef22.push(obj);
            }
          });
          this.columnDef = columnDef22;
        });
    }

    if (!hasApiCall && EntityList) {

      var columnDef22 = [];
      this.columnDef.forEach(element => {
        columnDef22.push(element);
      });
      this.columnDef = [];

      EntityList.forEach(i => {
        const obItem = columnDef22.find(x => x.index && x.index === i.EntityTypeID);
        if (!obItem) {
          const obj = {
            index: i.EntityTypeID,
            headerName: i.Subject,
            field: 'Subject' + i.EntityTypeID.toString(),
            width: 200,
            editable: true,
            resizable: true,
            cellEditorFramework: NgSelectVirtualScrollComponent,
            cellEditorParams: {
              Params: this.NgSelectContractEntityItemParams,
              Items: [],
              Owner: this
            },
            cellRenderer: 'SeRender',
            valueFormatter: function currencyFormatter(params) {
              if (params.value) {
                return params.value.Subject;
              } else {
                return '';
              }
            },
          };
          columnDef22.push(obj);
        }
      });
      this.columnDef = columnDef22;
    }
  }

  OnOrderRequestDateChange(ADate) {
    this.CustomerOrderDate = ADate.MDate;
    this.PersianOrderRequestDate = ADate.SDate;
  }


  RedioClick(IsPerson) {
    this.IsPerson = IsPerson;
  }

  OnChangeCheckBoxValue(Ischeck) {
    this.IsValid = Ischeck;
  }


  onGridReady(params: { api: any; }) {
    this.gridApi = params.api;
  }

  oncellEditingStarted(event) {
    if (event.colDef && event.colDef.field === 'ProductCodeName') {
      this.gridApi.forEachNode(node => {
        if (node.rowIndex === event.rowIndex) {
          // tslint:disable-next-line:max-line-length
          this.ProdcutTypeCode = node.data.ProductTypeCode;
        }
      });
      this.columnDef[2].cellEditorParams.Params.loading = true;
      this.ProductRequest.GetProductList(0,
        this.RegionParams.selectedObject,
        '',
        1,
        30,
        this.ProdcutTypeCode,
        this.IsPerson,
        event.data.ProductID).
        subscribe(res => {
          this.columnDef[2].cellEditorParams.Params.loading = false;
          this.RefreshPersonItems.RefreshItemsVirtualNgSelect({
            List: res.List,
            TotalItemCount: res.TotalItemCount,
            PageCount: Math.ceil(res.TotalItemCount / 30),
            type: 'PRI-product'
          });
        });
    }

    if (event.colDef && event.colDef.index && event.colDef.field === 'Subject' + event.colDef.index.toString()) {
      this.ProductRequest.GetEntityTypeItemList(event.colDef.index, event.data.ProductID, null, null)
        .subscribe(res => {
          this.RefreshPersonItems.RefreshItemsVirtualNgSelect({
            List: res,
            type: 'entity-item'
          });
        });

    }
  }


  RowClick(event) {
    this.selectedrow = event;
  }

  onSave() {
    this.gridApi.stopEditing();
    this.CheckValidate = true;
    let ValidateForm = true;
    const promise = new Promise<void>((resolve, reject) => {
      this.RequiredComponents.forEach((element, index, array) => {
        if (element.Required && !element.selectedObject && element.selectedObject !== 0) {
          ValidateForm = false;
        }
        if (index === (array.length - 1)) {
          resolve();
        }
      });
    }).then(() => {
      ValidateForm = ValidateForm && this.CustomerOrderDate && this.CustomerOrderCode && this.Subject

      if (ValidateForm) {
        let ItemNo = 0;
        const CustomerOrderItemList = [];
        const CustomerOrder = {
          CustomerOrderID: this.CustomerOrderID,
          RegionCode: 200,
          CustomerOrderCode: this.CustomerOrderCode,
          Subject: this.Subject,
          CustomerOrderDate: this.CustomerOrderDate,
          CustomerID: this.NgSelectPersonReqParams.selectedObject,
          AgentID: this.NgSelectAgentPersonReqParams.selectedObject,
          CustomerOrderTypeCode: this.OrderTypeParams.selectedObject,
          IsValid: true,
          //EmployerID: this.NgSelectEmployerPersonReqParams.selectedObject,
          //ContractID: this.NgSelectContractParamsFrom.selectedObject,
          IsWeb: true,
        }

        this.gridApi.forEachNode(node => {
          var keys = Object.keys(node.data);
          const EntityTypeItemIDList = [];
          if (node.data.EntityList) {
            node.data.EntityList.forEach(Entity => {
              let str = 'Subject' + Entity.EntityTypeID.toString()
              let ID = 'EntityTypeItemID' + Entity.EntityTypeID.toString();
              var key = keys.find(x => x === str);

              if (key && node.data[key]) {
                if (node.data[key].EntityTypeItemID) {
                  EntityTypeItemIDList.push(node.data[key].EntityTypeItemID);
                } else {
                  key = keys.find(x => x === ID);
                  if (key && node.data[key]) {
                    EntityTypeItemIDList.push(node.data[key]);
                  }
                }
              }

            });
          }

          const CustomerOrderItemObj = {
            CustomerOrderItemID: node.data.CustomerOrderItemID ? node.data.CustomerOrderItemID : -1,
            ItemNo: ++ItemNo,
            Qty: parseFloat(node.data.Qty),
            Note: node.data.Note,
            ProductID: (node.data.ProductID ? node.data.ProductID : null),
            StartDate: node.data.ShortStartDate,
            EndDate: node.data.ShortEndDate,
            EntityTypeItemIDList: EntityTypeItemIDList,
          };
          CustomerOrderItemList.push(CustomerOrderItemObj);
        });

        this.CustomerOrder.SaveCustomerOrder(CustomerOrder, CustomerOrderItemList, this.ModuleCode).subscribe((res: any) => {
          this.ShowMessageBoxWithOkBtn('ثبت با موفقیت انجام شد');
          this.CustomerOrderObject = res;
          this.CustomerOrderID = this.CustomerOrderObject.CustomerOrderID;
          this.rowsData = this.CustomerOrderObject.CustomerOrderItemList;
          this.SetEntityDataInDataRow(this.rowsData);
          this.OutPutParam.emit(true);
        });
      }
      else {
        this.ShowMessageBoxWithOkBtn('خواهشمند است ابتدا فیلد های مشخص شده را تکمیل فرمایید');
      }
    });
  }

  Close() {
    this.isClicked = false;
    this.Closed.emit(true);
  }

  ShowMessageBoxWithOkBtn(message) {
    this.isClicked = true;
    this.PopUpType = 'message-box';
    this.startTopPosition = 182;
    this.startLeftPosition = 557;
    this.alertMessageParams.message = message;
    this.alertMessageParams.HaveOkBtn = true;
    this.alertMessageParams.HaveYesBtn = false;
    this.alertMessageParams.HaveNoBtn = false;
  }

  ngAfterViewInit(): void {
    this.columnDef = [
      {
        headerName: 'ردیف',
        field: 'ItemNo',
        width: 70,
        resizable: true
      },
      {
        headerName: 'نوع',
        field: 'ProductTypeName',
        cellEditorFramework: NgSelectCellEditorComponent,
        cellEditorParams: {
          HardCodeItems: this.ProductTypeList,
          bindLabelProp: 'ProductTypeName',
          bindValueProp: 'ProductTypeCode'
        },
        cellRenderer: 'SeRender',
        valueFormatter: function currencyFormatter(params) {
          if (params.value) {
            return params.value.ProductTypeName;

          } else {
            return '';
          }
        },
        valueSetter: (params) => {
          params.data.ScaleName = null;
          params.data.ProductID = null;
          params.data.ProductName = null;
          if (params.newValue && params.newValue.ProductTypeName) {
            params.data.ProductTypeName = params.newValue.ProductTypeName;
            params.data.ProductTypeCode = params.newValue.ProductTypeCode;
            return true;
          } else {
            params.data.ProductTypeName = null;
            params.data.ProductTypeCode = null;
            return false;
          }
        },
        editable: true,
        width: 70,
        resizable: true
      },
      // {
      //   headerName: 'کالا/خدمت',
      //   field: 'ProductCodeName',
      //   cellEditorFramework: NgSelectVirtualScrollComponent,
      //   cellEditorParams: {
      //     Params: this.NgSelectVSParams,
      //     Items: [],
      //     MoreFunc: this.FetchMoreProduct,
      //     FetchByTerm: this.FetchProductByTerm,
      //     RedioChangeFunc: this.RedioSelectedChange,
      //     Owner: this
      //   },
      //   cellRenderer: 'SeRender',
      //   valueFormatter: function currencyFormatter(params) {
      //     if (params.value) {
      //       return params.value.ProductCodeName;
      //     } else {
      //       return '';
      //     }
      //   },
      //   valueSetter: (params) => {
      //     if (params.newValue && params.newValue.ProductCodeName) {
      //       params.data.ProductCodeName = params.newValue.ProductCodeName;
      //       params.data.ProductID = params.newValue.ProductID;
      //       this.ProductRequest.GetProductScaleName(params.newValue.ProductID).subscribe(res => {
      //         params.data.ScaleName = res;
      //       });
      //       this.EntityColumnDefinition(params.data.ProductID, this.selectedrow, null, true);
      //       return true;
      //     } else {
      //       params.data.ProductCodeName = '';
      //       params.data.ProductID = null;
      //       params.data.ScaleName = '';
      //       return false;
      //     }
      //   },
      //   editable: true,
      //   width: 350,
      //   resizable: true
      // },

      {
        headerName: 'کد محصول',
        field: 'ProductCode',
        cellEditorFramework: OverPopUpCellEditorComponent,
        tooltip: (params) => 'فراخوان از کالای فروش',
        cellEditorParams: {
          SearchPopupType: 'product-pattern',
          PopupParam: { RegionGroupCode: 2 }
        },
        cellRenderer: 'SeRender',
        valueFormatter: (params) => {
          if (params.value) {
            return params.value.ProductCode;
          } else {
            return '';
          }
        },
        editable: true,
        width: 170,
        resizable: true
      },
      {
        headerName: 'نام محصول',
        field: 'ProductName',
        width: 150,
        resizable: true
      },

      {
        headerName: 'واحد',
        field: 'ScaleName',
        width: 90,
        resizable: true
      },
      {
        headerName: 'تعداد',
        field: 'Qty',
        editable: true,
        HaveThousand: true,
        width: 90,
        resizable: true
      },
      {
        headerName: 'ابتدای تامین',
        field: 'PersianStartDate',
        width: 130,
        resizable: true,
        editable: true,
        cellEditorFramework: JalaliDatepickerComponent,
        cellEditorParams: {
          CurrShamsiDateValue: 'PersianStartDate',
          DateFormat: 'YYYY/MM/DD',
          WidthPC: 100,
          AppendTo: '.for-append-date'
        },
        cellRenderer: 'SeRender',
        valueFormatter: function currencyFormatter(params) {
          if (params.value) {
            return params.value.SDate;
          } else {
            return '';
          }
        },
        valueSetter: (params) => {
          if (params.newValue && params.newValue.MDate) {
            params.data.ShortStartDate = params.newValue.MDate;
            params.data.StartDate = params.newValue.MDate;
            params.data.PersianStartDate = params.newValue.SDate;
            return true;
          } else {
            params.data.ShortStartDate = null;
            params.data.StartDate = null;
            params.data.PersianStartDate = '';
            return false;
          }
        }
      },
      {
        headerName: 'انتهای تامین',
        field: 'PersianEndDate',
        width: 130,
        resizable: true,
        editable: true,
        cellEditorFramework: JalaliDatepickerComponent,
        cellEditorParams: {
          CurrShamsiDateValue: 'PersianEndDate',
          DateFormat: 'YYYY/MM/DD',
          WidthPC: 100,
          AppendTo: '.for-append-date'
        },
        cellRenderer: 'SeRender',
        valueFormatter: function currencyFormatter(params) {
          if (params.value) {
            return params.value.SDate;
          } else {
            return '';
          }
        },
        valueSetter: (params) => {
          if (params.newValue && params.newValue.MDate) {
            params.data.ShortEndDate = params.newValue.MDate;
            params.data.EndDate = params.newValue.MDate;
            params.data.PersianEndDate = params.newValue.SDate;
            this.gridApi.forEachNode(node => {
            });
            return true;
          } else {
            params.data.ShortEndDate = null;
            params.data.EndDate = null;
            params.data.PersianEndDate = '';
            return false;
          }
        }
      },
      {
        headerName: 'موضوع',
        field: 'Note',
        editable: true,
        width: 250,
        resizable: true
      },
    ];

  }

  PersonReq_FetchMore(event) {
    this.NgSelectPersonReqParams.loading = true;
    const ResultList = [];
    // tslint:disable-next-line: no-shadowed-variable
    const promise = new Promise((resolve, reject) => {
      this.ActorList.GetActorPaging(event.PageNumber,
        event.PageSize,
        event.term,
        event.SearchOption,
        this.IsPerson,
        false, false).subscribe(res => {
          event.CurrentItems.forEach(el => {
            ResultList.push(el);
            this.PersonReqItems.push(el);
          });
          res.List.forEach(element => {
            ResultList.push(element);
            this.PersonReqItems.push(element);
          });
          resolve(res.TotalItemCount);
        }
        );
    }).then((TotalItemCount: number) => {
      this.RefreshPersonItems.RefreshItemsVirtualNgSelect({
        List: ResultList,
        term: event.term,
        TotalItemCount: TotalItemCount,
        PageCount: Math.ceil(TotalItemCount / 30),
        type: 'user-person-Req-search'
      });
    });
  }

  PersonReqOpened(ActorID = null) {
    this.ActorList.GetActorPaging(1, 30, '', 'ActorID', this.IsPerson, false, false, ActorID).subscribe(res => {
      this.PersonReqItems = res.List;
      this.RefreshPersonItems.RefreshItemsVirtualNgSelect({
        List: res.List,
        TotalItemCount: res.TotalItemCount,
        PageCount: Math.ceil(res.TotalItemCount / 30),
        type: 'user-person-Req-search'
      });
    });
  }

  Person_Req_DoSearch(event) {
    this.NgSelectPersonReqParams.loading = true;
    this.ActorList.GetActorPaging(event.PageNumber,
      event.PageSize,
      event.term,
      event.SearchOption,
      this.IsPerson,
      false, false).subscribe(res => {
        this.PersonReqItems = res.List,
          this.RefreshPersonItems.RefreshItemsVirtualNgSelect({
            List: res.List,
            term: event.term,
            TotalItemCount: res.TotalItemCount,
            PageCount: Math.ceil(res.TotalItemCount / 30),
            type: 'user-person-Req-search'
          });
      });
    this.NgSelectPersonReqParams.loading = false;
  }


  AgentPersonReq_FetchMore(event) {
    this.NgSelectAgentPersonReqParams.loading = true;
    const ResultList = [];
    // tslint:disable-next-line: no-shadowed-variable
    const promise = new Promise((resolve, reject) => {
      this.ActorList.GetActorPaging(event.PageNumber,
        event.PageSize,
        event.term,
        event.SearchOption,
        this.IsPerson,
        false, false).subscribe(res => {
          event.CurrentItems.forEach(el => {
            ResultList.push(el);
            this.PersonReqItems.push(el);
          });
          res.List.forEach(element => {
            ResultList.push(element);
            this.PersonReqItems.push(element);
          });
          resolve(res.TotalItemCount);
        }
        );
    }).then((TotalItemCount: number) => {
      this.RefreshPersonItems.RefreshItemsVirtualNgSelect({
        List: ResultList,
        term: event.term,
        TotalItemCount: TotalItemCount,
        PageCount: Math.ceil(TotalItemCount / 30),
        type: 'user-agent'
      });
    });
  }
  AgentPersonReqOpened(AgentID = null) {
    this.ActorList.GetActorPaging(1, 30, '', 'ActorID', true, false, false, AgentID).subscribe(res => {
      this.PersonReqItems = res.List;
      this.RefreshPersonItems.RefreshItemsVirtualNgSelect({
        List: res.List,
        TotalItemCount: res.TotalItemCount,
        PageCount: Math.ceil(res.TotalItemCount / 30),
        type: 'user-agent'
      });
    });
  }
  AgentPerson_Req_DoSearch(event) {
    this.NgSelectAgentPersonReqParams.loading = true;
    this.ActorList.GetActorPaging(event.PageNumber,
      event.PageSize,
      event.term,
      event.SearchOption,
      this.IsPerson,
      false, false).subscribe(res => {
        this.PersonReqItems = res.List,
          this.RefreshPersonItems.RefreshItemsVirtualNgSelect({
            List: res.List,
            term: event.term,
            TotalItemCount: res.TotalItemCount,
            PageCount: Math.ceil(res.TotalItemCount / 30),
            type: 'user-agent'
          });
      });
    this.NgSelectAgentPersonReqParams.loading = false;
  }


  EmployerPersonReq_FetchMore(event) {
    this.NgSelectPersonReqParams.loading = true;
    const ResultList = [];
    // tslint:disable-next-line: no-shadowed-variable
    const promise = new Promise((resolve, reject) => {
      this.ActorList.GetActorPaging(event.PageNumber,
        event.PageSize,
        event.term,
        event.SearchOption,
        this.IsPerson,
        false, false).subscribe(res => {
          event.CurrentItems.forEach(el => {
            ResultList.push(el);
            this.PersonReqItems.push(el);
          });
          res.List.forEach(element => {
            ResultList.push(element);
            this.PersonReqItems.push(element);
          });
          resolve(res.TotalItemCount);
        }
        );
    }).then((TotalItemCount: number) => {
      this.RefreshPersonItems.RefreshItemsVirtualNgSelect({
        List: ResultList,
        term: event.term,
        TotalItemCount: TotalItemCount,
        PageCount: Math.ceil(TotalItemCount / 30),
        type: 'user-person-Req-search'
      });
    });
  }
  EmployerPersonReqOpened(EmployerID = null) {
    this.ActorList.GetActorPaging(1, 30, '', 'ActorID', true, false, false, EmployerID).subscribe(res => {
      this.PersonReqItems = res.List;
      this.RefreshPersonItems.RefreshItemsVirtualNgSelect({
        List: res.List,
        TotalItemCount: res.TotalItemCount,
        PageCount: Math.ceil(res.TotalItemCount / 30),
        type: 'employer-agent'
      });
    });
  }
  EmployerPerson_Req_DoSearch(event) {
    this.NgSelectEmployerPersonReqParams.loading = true;
    this.ActorList.GetActorPaging(event.PageNumber,
      event.PageSize,
      event.term,
      event.SearchOption,
      this.IsPerson,
      false, false).subscribe(res => {
        this.PersonReqItems = res.List,
          this.RefreshPersonItems.RefreshItemsVirtualNgSelect({
            List: res.List,
            term: event.term,
            TotalItemCount: res.TotalItemCount,
            PageCount: Math.ceil(res.TotalItemCount / 30),
            type: 'employer-agent'
          });
      });
    this.NgSelectEmployerPersonReqParams.loading = false;
  }


  FetchMoreFromContract(event) {
    this.NgSelectContractParamsFrom.loading = true;
    const ResultList = [];
    this.ContractList.GetRelatedContractpaging(event.PageNumber, event.PageSize, event.term, event.SearchOption,
      this.RegionParams.selectedObject, true, null).subscribe((res: any) => {
        event.CurrentItems.forEach(el => {
          ResultList.push(el);
        });
        res.List.forEach(element => {
          ResultList.push(element);
        });
        this.ContractListSetFrom = ResultList;
      });

    this.NgSelectContractParamsFrom.loading = false;
  }
  doFromContractSearch(event) {
    this.currentContractSearchTerm = event.term;
    this.NgSelectContractParamsFrom.loading = true;
    if (event.SearchOption === 'null' || event.SearchOption == null) {
      event.SearchOption = 'ContractCode';
    }
    this.ContractList.GetRelatedContractpaging(event.PageNumber, event.PageSize, event.term,
      event.SearchOption, this.RegionParams.selectedObject,
      true, null).subscribe((res: any) => {
        if (this.currentContractSearchTerm === event.term) {
          this.ContractListSetFrom = res.List;
          this.FromContractTotalItemCount = res.TotalItemCount;
          this.FromContractPageCount = Math.ceil(res.TotalItemCount / 30);
          this.NgSelectContractParamsFrom.loading = false;
        }
      });
  }

  FromContractOpened(ContractID = null) {
    this.NgSelectContractParamsFrom.loading = true;
    this.ContractList.GetRelatedContractpaging(1, 30, '', '',
      this.RegionParams.selectedObject, true, ContractID).subscribe((res: any) => {
        this.ContractListSetFrom = res.List;
        this.FromContractTotalItemCount = res.TotalItemCount;
        this.FromContractPageCount = Math.ceil(res.TotalItemCount / 30);
      });
    this.NgSelectContractParamsFrom.loading = false;
  }

  FromContractChanged(event) {
    //  this.CostContractID = event;
  }

  popupclosed(event) {
    this.isClicked = false;
    this.HeightPercentWithMaxBtn = null;
    this.PercentWidth = null;
    this.MainMaxwidthPixel = null;
    this.MinHeightPixel = null;
  }

  onChangeRegion(RegionCode) {
    const Region = this.RegionItems.find(x => x.RegionCode === RegionCode);
    this.RegionGroupCode = Region.RegionGroupCode;
    //  this.rowsData = [];
    this.ngAfterViewInit();
  }

  onCellValueChanged(event) {
    const value = event.newValue;
    let itemsToUpdate = [];
    let ProductTypeCode = event.data.ProductTypeCode;
    if (event.colDef && event.colDef.field === 'ProductCode') {

      itemsToUpdate = [];
      this.gridApi.forEachNode(node => {
        if (node.rowIndex === event.rowIndex) {

          node.data.ProductID = '';
          node.data.ProductCode = '';
          node.data.ScaleName = '';
          node.data.ProductName = '';
          node.data.ProductTypeName = '';
          itemsToUpdate.push(node.data);
        }
      });

      this.gridApi.updateRowData({ update: itemsToUpdate });
      const ProductCodevalue = (typeof (value) === 'object') ? value[0] : value;
      ProductTypeCode = (typeof (value) === 'object') ? null : ProductTypeCode;
      this.ProductRequest.GetProduct(ProductCodevalue, ProductTypeCode).subscribe(res => {
        itemsToUpdate = [];

        this.gridApi.forEachNode(node => {
          if (node.rowIndex === event.rowIndex) {
            node.data.ProductID = res.ProductID;
            node.data.ProductCode = res.ProductCode;
            node.data.ScaleName = res.ScaleName;
            node.data.ProductName = res.ProductName;
            node.data.ProductTypeName = res.ProductTypeName;
            itemsToUpdate.push(node.data);
            this.EntityColumnDefinition(node.data.ProductID, node, null, true)
          }
        });
        this.gridApi.updateRowData({ update: itemsToUpdate });
      });
      // itemsToUpdate = [];
      // this.gridApi.forEachNode(node => {
      //   if (node.rowIndex === event.rowIndex) {
      //     node.data.PriceListPatternID = '';
      //     node.data.PriceListNo = value;
      //     node.data.PriceListNo = IsDuplicate && !this.HasCOIEntity ? '' : PriceListNovalue;
      //     node.data.PriceListName = '';
      //     node.data.WorkUnitName = '';
      //     node.data.Amount = '';
      //     node.data.IsStar = '';
      //     node.data.IsStarCode = '';
      //     node.data.Qty = '';
      //     node.data.FinalAmount = '';
      //     itemsToUpdate.push(node.data);
      //   }
      // });
      // this.gridApi.updateRowData({ update: itemsToUpdate });
      // if (IsDuplicate && !this.HasCOIEntity) {
      //   return;
      // }
      // const Values = [];
      // if (value != null && value !== '') {
      //   Values.push(value);
      //   // if (PriceListNovalue != null && PriceListNovalue !== '') {
      //   //   Values.push(PriceListNovalue);
      //   this.PriceList.GetPriceListTopicList(Values, this.PriceListTypeCode + this.CostListFinYearCode, null, null).subscribe(
      //     res => {
      //       if (res[0]) {
      //         itemsToUpdate = [];
      //         this.gridApi.forEachNode(node => {
      //           if (node.rowIndex === event.rowIndex) {
      //             node.data.PriceListPatternID = res[0].PriceListPatternID;
      //             node.data.ContractOrderItemID = this.selectedContractOrderItemID;
      //             node.data.PriceListNo = res[0].PriceListTopicCode;
      //             node.data.PriceListName = res[0].PriceListTopicName;
      //             node.data.WorkUnitName = res[0].WorkUnitName;
      //             node.data.WorkUnitCode = res[0].WorkUnitCode;
      //             node.data.Amount = res[0].Amount;
      //             node.data.IsStar = res[0].IsStar;
      //             node.data.IsStarCode = res[0].IsStarCode;
      //             node.data.Qty = '';
      //             node.data.FinalAmount = node.data.Qty * node.data.Amount;
      //             node.data.IsRelated = res[0].IsRelated;
      //             itemsToUpdate.push(node.data);
      //             if (node.data.IsRelated) {
      //               this.ShowMessageBoxWithYesNoBtn('فهرست بهای انتخاب شده دارای ردیف مرتبط است آیا مایل به درج می باشید؟');
      //               this.BtnClickedName = 'IsRelatedShow';
      //               this.IsNotFound = true;
      //             }
      //           }
      //         });
      //         this.gridApi.updateRowData({ update: itemsToUpdate });
      //         // tslint:disable-next-line:max-line-length
      //       } else {
      //         this.ShowMessageBoxWithYesNoBtn(' ردیف وارد شده موجود نیست. آیا مایل به افزودن اطلاعات این ردیف فهرست بها می باشید؟');
      //         this.BtnClickedName = 'PriceListTopicNotFound';
      //         this.IsNotFound = true;
      //       }
      //     }
      //   );
      // }
    }
  }

  SetEntityDataInDataRow(rowsData) {
    rowsData.forEach(element => {
      if (element.CustomerOrderEntityList) {
        element.CustomerOrderEntityList.forEach(
          EntityItem => {
            var Name = 'Subject' + EntityItem.EntityTypeID.toString();
            var ID = 'EntityTypeItemID' + EntityItem.EntityTypeID.toString();
            element[Name] = EntityItem.Subject;
            element[ID] = EntityItem.EntityTypeItemID;
          });
      }
    });
  }

  onConfirm() {
    // if (this.CheckRegionWritable) {
    //   this.ShowMessageBoxWithOkBtn('امکان تایید درخواست به دلیل دسترسی فقط خواندنی کاربر در این واحد اجرایی وجود ندارد');
    //   return;
    // }

    if (!this.HaveAlertToFinance || this.IsAdmin === true) {
      this.BtnClickedName = 'BtnConfirm';
      if (!this.IsEndFlow) {
        if (!this.ReadyToConfirm || this.ReadyToConfirm === null || this.ReadyToConfirm === 0) {
          if (this.ChangeDetection) {
            this.ShowMessageBoxWithYesNoBtn('اطلاعات  سفارش مشتری تغییر کرده است آیا می خواهید بدون ثبت اطلاعات تایید کنید ؟');
          } else {
            this.DOConfirm();
          }
        } else {
          this.Cartable.UserUpdateWorkFlow(this.WorkFlowID,
            this.CustomerOrderID,
            200,
            this.ModuleCode,
            0,
            this.WorkflowObjectCode,
            this.ModuleViewTypeCode,
            this.OrginalModuleCode,
            this.CartableUserID,
            this.CurrWorkFlow ? this.CurrWorkFlow.JoinWorkflowLogID : null)
            .subscribe(res => {
              this.ShowMessageBoxWithOkBtn('عدم تایید سفارش مشتری با موفقیت انجام شد');

              this.ReadyToConfirm = 0;
              this.btnConfirmName = 'تایید';
              this.btnConfirmIcon = 'ok';
              // this.IsEditConfirm = true;
            }
            );
        }
      } else {
        this.DOFinalConfirm();
      }
    } else {
      this.ShowMessageBoxWithOkBtn('لطفا جهت تامین اعتبار به سیستم جامع مالی مراجعه نمایید');
    }
  }

  // onRevocation() {
  //   // tslint:disable-next-line:max-line-length
  //   if (this.ModuleCode === 2730 && (this.ModuleViewTypeCode === 200000 || this.ModuleViewTypeCode === 300000 || this.ModuleViewTypeCode === 100000)) {
  //     this.startLeftPosition = 50;
  //     this.startTopPosition = 20;
  //     this.HaveMaxBtn = true;
  //     this.HeightPercentWithMaxBtn = 97;
  //     this.PercentWidth = 90;
  //     this.MainMaxwidthPixel = 1500;
  //     this.MinHeightPixel = 545;
  //     this.isClicked = true;
  //     this.PopUpType = 'choosen-request-revocation';
  //     this.PopupParam = {
  //       ObjectID: this.CostFactorID,
  //       RegionCode: this.ProductRequestObject.RegionCode,
  //       OrganizationCode: this.RegionItems.find(x => x.RegionCode === this.ProductRequestObject.RegionCode).OrganizationCode,
  //       OrginalModuleCode: this.OrginalModuleCode
  //     };
  //   } else {
  //     // tslint:disable-next-line:max-line-length
  //     this.ProductRequest.RequestRevocation(this.CurrWorkFlow, this.WorkFlowID, this.CostFactorID, this.WorkflowTypeCode, this.ModuleCode, this.OrginalModuleCode).subscribe(res => {
  //       this.ProductRequestObject.ProductRequestStatusCode = res;
  //       if (res === 3) {
  //         this.btnRevocationName = 'بازگشت از ابطال';
  //         this.btnRevocationIcon = 'ok';
  //         this.ShowMessageBoxWithOkBtn('ابطال درخواست انجام معامله با موفقیت انجام شد');
  //       } else if (res === 2) {
  //         this.btnRevocationName = 'ابطال';
  //         this.btnRevocationIcon = 'revocation';
  //         this.ShowMessageBoxWithOkBtn('بازگشت از ابطال درخواست انجام معامله با موفقیت انجام شد');
  //       } else if (res === -1) {
  //         this.ShowMessageBoxWithOkBtn('مسیر ' + ' ' + this.btnRevocationName + ' ' + ' به درستی تعریف نشده است با راهبر تماس بگیرید');
  //       } else {
  //         this.ShowMessageBoxWithOkBtn(' امکان' + ' ' + this.btnRevocationName + ' ' + 'وجود ندارد ');
  //       }
  //     });
  //   }
  // }

  onConfirmAndSend() {
    // if (this.CheckRegionWritable) {
    //   this.ShowMessageBoxWithOkBtn('امکان تایید و ارسال درخواست به دلیل دسترسی فقط خواندنی کاربر در این واحد اجرایی وجود ندارد');
    //   return;
    // }

    if (!this.HaveAlertToFinance || this.IsAdmin === true) {
      this.BtnClickedName = 'ConfirmAndSend';
      // this.IsDown = false;
      this.ConfirmAndSend();
    } else {
      this.ShowMessageBoxWithOkBtn('لطفا جهت تامین اعتبار به سیستم جامع مالی مراجعه نمایید');
    }
  }

  onUnConfirmAndReturn() {
    // if (this.CheckRegionWritable) {
    //   this.ShowMessageBoxWithOkBtn('امکان عدم تایید و بازگشت درخواست به دلیل دسترسی فقط خواندنی کاربر در این واحد اجرایی وجود ندارد');
    //   return;
    // }
    if (!this.HaveAlertToFinance || this.IsAdmin === true) {
      this.IsDown = false;
      // tslint:disable-next-line:no-shadowed-variable
      const promise = new Promise((resolve, reject) => {
        this.DoUnConfirm(false, resolve);
      }).then((IsDown) => {
        if (IsDown) {
          this.ObjectNo = this.OrderCode;
          this.ObjectID = this.CustomerOrderID;
          this.Cartable.GetUserWorkFlow(this.WorkFlowID, 2)
            .subscribe(
              res => {
                this.IsDown = true;
                if (res != null && res.length > 0) {
                  // const minPostingObject = res.reduce((a, b) => Math.max(a.MinimumPosting, b.MinimumPosting));
                  res.forEach(element => {
                    element.UserImage = this.CommonService._arrayBufferToBase64(element.UserImage);
                  });
                  this.PopUpType = 'work-flow-send';
                  this.startLeftPosition = 350;
                  this.startTopPosition = 105;
                  // this.PercentWidth = undefined;
                  // this.OverMainMinwidthPixel = undefined;
                  // this.MainMaxwidthPixel = undefined;
                  // this.HeightPercentWithMaxBtn = undefined;
                  // this.MinHeightPixel = undefined;
                  this.PopupParam = {
                    Message: 'بازگشت',
                    OperationCode: 2,
                    rows: res,
                    CurrWorkFlow: this.CurrWorkFlow,
                    WorkFlowID: this.WorkFlowID,
                    IsEnd: this.IsEndFlow,
                    ObjectNo: this.ObjectNo,
                    WorkflowTypeName: this.WorkflowTypeName,
                    WorkflowTypeCode: this.WorkflowTypeCode,
                    WorkflowObjectCode: this.WorkflowObjectCode,
                    MinimumPosting: this.MinimumPosting,
                    ObjectID: this.ObjectID,
                    OrginalModuleCode: this.OrginalModuleCode,
                    CartableUserID: this.CartableUserID
                  };
                  this.isClicked = true;
                } else {
                  this.ShowMessageBoxWithOkBtn('شخصی جهت بازگشت کار توسط موتور گردش کار یافت نشد لطفا با راهبر سیستم تماس حاصل فرمایید');
                }
              }
            );
        } else {
          this.IsDown = true;
          this.ShowMessageBoxWithOkBtn('عملیات تایید با مشکل مواجه شد');
        }
      });
    } else {
      this.ShowMessageBoxWithOkBtn('لطفا جهت تامین اعتبار به سیستم جامع مالی مراجعه نمایید');
    }
  }
  // tslint:disable-next-line:no-shadowed-variable
  DOConfirm(HasAlert = true, resolve = null) {
    if (!this.HaveAlertToFinance || this.IsAdmin === true) {
      if (this.WorkflowObjectCode === null) {
        this.ShowMessageBoxWithOkBtn('ماژول گردش کار برای این واحد اجرایی به درستی تعریف نشده است');
      }
      this.Cartable.UserUpdateWorkFlow(this.WorkFlowID,
        this.CustomerOrderID,
        200,
        this.ModuleCode,
        1,
        this.WorkflowObjectCode,
        this.ModuleViewTypeCode,
        this.OrginalModuleCode,
        this.CartableUserID,
        this.CurrWorkFlow ? this.CurrWorkFlow.JoinWorkflowLogID : null).
        subscribe(res => {
          if (HasAlert) {
            this.ShowMessageBoxWithOkBtn('تایید درخواست  انجام معامله  با موفقیت انجام شد');
          }
          this.RefreshPersonItems.RefreshCartable();
          this.ReadyToConfirm = 1;
          this.btnConfirmName = 'عدم تایید';
          this.btnConfirmIcon = 'cancel';
          this.IsEditable = false;
          //  this.IsEditConfirm = false;
          resolve(true);
        },
          err => {
            if (err.error.Message.includes('|')) {
              resolve(false);
            } else {
              this.ShowMessageBoxWithOkBtn('خطای پیش بینی نشده');
            }
          }
        );
    } else {
      this.ShowMessageBoxWithOkBtn('لطفا جهت تامین اعتبار به سیستم جامع مالی مراجعه نمایید');
    }
  }
  // tslint:disable-next-line:no-shadowed-variable
  DoUnConfirm(alert = true, resolve = null) {
    if (!this.HaveAlertToFinance || this.IsAdmin === true) {
      this.Cartable.UserUpdateWorkFlow(this.WorkFlowID,
        this.CustomerOrderID,
        200,
        this.ModuleCode,
        0,
        this.WorkflowObjectCode,
        this.ModuleViewTypeCode,
        this.OrginalModuleCode,
        this.CartableUserID,
        this.CurrWorkFlow ? this.CurrWorkFlow.JoinWorkflowLogID : null).subscribe(res => {
          // if (alert) {
          //   this.ShowMessageBoxWithOkBtn('عدم تایید برآورد اولیه با موفقیت انجام شد');
          // }
          this.ReadyToConfirm = 0;
          this.btnConfirmName = 'تایید';
          this.btnConfirmIcon = 'ok';
          this.IsEditable = false;
          //this.IsEditConfirm = true;
          resolve(true);
        },
          err => {
            if (err.error.Message.includes('|')) {
              resolve(false);
            } else {
              this.ShowMessageBoxWithOkBtn('خطای پیش بینی نشده');
            }
          }
        );
    } else {
      this.ShowMessageBoxWithOkBtn('لطفا جهت تامین اعتبار به سیستم جامع مالی مراجعه نمایید');
    }
  }

  DOFinalConfirm() {
    this.Cartable.UserFinalConfirmWorkFlow(
      this.CurrWorkFlow,
      this.WorkFlowID,
      10,
      '',
      this.ObjectNo,
      this.WorkflowTypeName,
      this.ObjectID,
      this.WorkflowTypeCode,
      this.ReadyToConfirm === null || this.ReadyToConfirm === 0,
      this.WorkflowObjectCode,
      this.ModuleViewTypeCode,
      this.CartableUserID
    )
      .subscribe(res2 => {
        let messageStr = '';
        if (this.ReadyToConfirm && this.ReadyToConfirm === 1) {
          messageStr = 'بازگشت از تایید نهایی سفارش مشتری با موفقیت انجام شد';
          this.ReadyToConfirm = 0;
          this.btnConfirmName = 'تایید نهایی';
          this.btnConfirmIcon = 'ok';

        } else {
          messageStr = 'تایید نهایی سفارش مشتری با موفقیت انجام شد';
          this.ReadyToConfirm = 1;
          this.btnConfirmName = 'بازگشت از تایید نهایی';
          this.btnConfirmIcon = 'cancel';
        }
        this.ShowMessageBoxWithOkBtn(messageStr);
      });
  }

  ConfirmAndSend() {
    this.DoConfirmAndSend();
  }

  DoConfirmAndSend() {
    // tslint:disable-next-line:no-shadowed-variable
    const promise = new Promise((resolve, reject) => {
      this.DOConfirm(false, resolve);
    }).then((IsDown) => {
      if (IsDown) {
        new Promise((StartedWFResolve, reject) => {
          this.SetStartedWFInfo(StartedWFResolve);
        }).then(() => {
          this.ObjectNo = this.OrderCode;
          this.ObjectID = this.CustomerOrderID;
          this.Cartable.GetUserWorkFlow(this.WorkFlowID, 1)
            .subscribe(
              res => {
                this.IsDown = true;
                if (res != null && res.length > 0) {
                  if (this.IsEndFlow) {
                    this.WorkFlowTransitionID = res[0].WorkFlowTransitionID;
                    // tslint:disable-next-line:max-line-length
                    this.ShowMessageBoxWithOkBtn('باتوجه به اینکه نقش شما در این گردش آخرین فعالیت می باشدارسال شما به عنوان پایان کار در نظر گرفته می شود');
                  } else {
                    res.forEach(element => {
                      element.UserImage = this.CommonService._arrayBufferToBase64(element.UserImage);
                    });
                    this.PopUpType = 'work-flow-send';
                    this.startLeftPosition = 350;
                    this.startTopPosition = 105;
                    // this.PercentWidth = null;
                    // this.OverMainMinwidthPixel = null;
                    // this.MainMaxwidthPixel = null;
                    // this.HeightPercentWithMaxBtn = null;
                    // this.MinHeightPixel = null;
                    this.PopupParam = {
                      Message: 'ارسال',
                      OperationCode: 1,
                      rows: res,
                      CurrWorkFlow: this.CurrWorkFlow,
                      WorkFlowID: this.WorkFlowID,
                      IsEnd: this.IsEndFlow,
                      ObjectNo: this.ObjectNo,
                      //   ModuleViewTypeCode: Number(this.ModuleViewTypeCode),
                      WorkflowTypeName: this.WorkflowTypeName,
                      WorkflowTypeCode: this.WorkflowTypeCode,
                      WorkflowObjectCode: this.WorkflowObjectCode,
                      ObjectID: this.ObjectID,
                      MinimumPosting: this.InputParam.MinimumPosting,
                      OrginalModuleCode: this.OrginalModuleCode,
                      CartableUserID: this.CartableUserID
                    };
                    this.isClicked = true;
                  }
                } else {
                  this.ShowMessageBoxWithOkBtn('شخصی جهت ارسال وجود ندارد');
                }
              }
            );
        });
      } else {
        this.IsDown = true;
      }
    });

  }

  OnFinalConfirm() {
    this.Cartable.UserConfirmWorkFlow(
      this.CurrWorkFlow,
      this.WorkFlowID,
      this.WorkFlowTransitionID,
      null,
      '',
      this.ObjectNo,
      this.WorkflowTypeCode,
      this.WorkflowTypeName,
      this.ObjectID,
      this.CartableUserID
    )
      .subscribe(res => {
        this.RefreshPersonItems.RefreshCartable();
        this.IsEditable = false;
      },
        err => {
          if (!err.error.Message.includes('|')) {
            this.ShowMessageBoxWithOkBtn('خطای پیش بینی نشده');
          }
        });
  }

  ShowMessageBoxWithYesNoBtn(message) {
    this.isClicked = true;
    this.PopUpType = 'message-box';
    // this.HaveHeader = true;
    // this.HaveMaxBtn = false;
    this.startLeftPosition = 449;
    this.startTopPosition = 87;
    this.alertMessageParams.message = message;
    this.alertMessageParams.HaveOkBtn = false;
    this.alertMessageParams.HaveYesBtn = true;
    this.alertMessageParams.HaveNoBtn = true;
  }

  MessageBoxAction(event) {
    if ((this.BtnClickedName === 'BtnConfirm') && event === 'YES') {
      this.DOConfirm();
    }

    if (this.BtnClickedName === 'ConfirmAndSend' && event === 'YES') {
      this.ConfirmAndSend();
    }

    if (this.PopUpType === 'message-box' && this.IsEndFlow === 1 && this.BtnClickedName === 'ConfirmAndSend') {
      this.OnFinalConfirm();
    }

  }

  getOutPutParam(event) { }


  OnClickPrintFlow() {
    this.PopUpType = 'customer-order-product-request';
    this.isClicked = true;
    this.startLeftPosition = 5;
    this.startTopPosition = 5;
    this.HaveMaxBtn = true;
    this.HeightPercentWithMaxBtn = 97
    this.PercentWidth = 90;
    this.MainMaxwidthPixel = 2000;
    this.MinHeightPixel = 645;

    this.PopupParam = {ObjectID : this.CustomerOrderID} ;
  }
}
