import { Component, OnInit, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { CustomerOrderService } from 'src/app/Services/CRM/CustomerOrderService';
import { CheckboxFieldEditableComponent } from 'src/app/Shared/checkbox-field-editable/checkbox-field-editable.component';
import { TemplateRendererComponent } from 'src/app/Shared/grid-component/template-renderer/template-renderer.component';
import { NgSelectVirtualScrollComponent } from 'src/app/Shared/ng-select-virtual-scroll/ng-select-virtual-scroll.component';
import { NgSelectCellEditorComponent } from 'src/app/Shared/NgSelectCellEditor/ng-select-cell-editor.component';
import { ProductRequestService } from 'src/app/Services/ProductRequest/ProductRequestService';
import { RefreshServices } from 'src/app/Services/BaseService/RefreshServices';

@Component({
  selector: 'app-customer-order-product-request',
  templateUrl: './customer-order-product-request.component.html',
  styleUrls: ['./customer-order-product-request.component.css']
})
export class CustomerOrderProductRequestComponent implements OnInit {
  @Input() InputParam;
  @Output() Closed: EventEmitter<any> = new EventEmitter<any>();
  IsEditable = true;
  IsMore = false;
  gridApi: any;
  gridApiMenu: any;
  gridApiFastMenu: any;
  rowData: any = [];
  rowsData: any = [];
  SelectedColumnDef;
  columnDef;
  CustomerOrderID;
  CustomerOrderDate;
  Subject;
  CustomerName;
  CustomerOrderCode;
  selectedMenuID = -1;
  selectedFastMenuID = -1;
  selectedMenuItem: any;
  selectedFastMenuItem: any;
  btnclicked = false;
  startLeftPosition: number;
  startTopPosition: number;
  MinHeightPixel: number;
  PercentWidth: number;
  MainMaxwidthPixel: any;
  HeightPercentWithMaxBtn: number;
  HaveMaxBtn = false;
  type: string;
  HaveHeader: boolean;
  paramObj;
  ProdcutTypeCode: any;
  NgSelectVSParams = {
    bindLabelProp: 'ProductName',
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
    DropDownMinWidth: '300px',
    AdvanceSearch: {
      SearchLabel: 'جستجو براساس :',
      SearchItemDetails:
        [{ HeaderCaption: 'کد', HeaderName: 'ProductCode', width: 40, TermLenght: 3, SearchOption: 0 },
        { HeaderCaption: 'نام', HeaderName: 'ProductName', width: 53, MinTermLenght: 3, SearchOption: 1 }],
      SearchItemHeader:
        [{ HeaderCaption: 'کد', width: 40, },
        { HeaderCaption: 'نام', width: 53, }],
      HaveItemNo: true,
      ItemNoWidth: 16
    }
  };
  ProductTypeList = [{ ProductTypeCode: 1, ProductTypeName: 'کالا' },
  { ProductTypeCode: 2, ProductTypeName: 'خدمت' }];
  alertMessageParams = { HaveOkBtn: true, message: '', HaveYesBtn: false, HaveNoBtn: false };
  @ViewChild('IsChosen') IsChosen: TemplateRef<any>;
  constructor(private CustomerOrder: CustomerOrderService,
    private ProductRequest: ProductRequestService,
    private RefreshPersonItems: RefreshServices) { }

  ngOnInit() {
    // if (this.InputParam) {
    this.CustomerOrderID =this.InputParam.ObjectID;
    //this.CustomerOrderID = this.InputParam.CustomerOrderID;
    this.CustomerOrder.GetCustomerOrder(this.CustomerOrderID).subscribe(res => {
      this.CustomerOrderDate = res.PersianCustomerOrderDate;
      this.Subject = res.Subject;
      this.CustomerName = res.FullCustomerName;
      this.CustomerOrderCode = res.CustomerOrderCode;
      this.rowData = res.CustomerOrderItemList;
    });
    // }

  }
  ngAfterViewInit(): void {

    this.SelectedColumnDef = [
      {
        headerName: 'ردیف',
        field: 'ItemNo',
        width: 100,
        resizable: true,
      },
      {
        headerName: 'انتخاب',
        field: 'IsChosen',
        width: 100,
        cellEditorFramework: CheckboxFieldEditableComponent,
        cellEditorParams: { MaxLength: 3 },
        cellRendererFramework: TemplateRendererComponent,
        cellRendererParams: {
          ngTemplate: this.IsChosen
        },
        cellStyle: function (params) {
          return { 'text-align': 'center' };
        },
        valueSetter: (params) => {
          if (params.newValue) {
            params.data.IsChosen = true;
            return true;
          } else {
            params.data.IsChosen = false;
            return false;
          }
        },
        resizable: true,
        editable: true
      },

      {
        headerName: 'محصول',
        field: 'ProductName',
        width: 500,
        resizable: true
      },
      {
        headerName: 'تعداد',
        field: 'Qty',
        width: 300,
        resizable: true
      },
      {
        headerName: 'تعداد باقیمانده',
        field: 'RemainQty',
        width: 100,
        resizable: true
      },

    ]

    this.columnDef = [
      {
        headerName: 'ردیف',
        field: 'ItemNo',
        width: 100,
        resizable: true,
      },
      {
        headerName: 'نوع درخواستی',
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
          if (params.newValue) {
            if (params.newValue.ProductTypeName !== params.oldValue) {
              params.data.ProductTypeName = params.newValue.ProductTypeName;
              params.data.ProductTypeCode = params.newValue.ProductTypeCode;
              params.data.ScaleName = null;
              params.data.ProductID = null;
              params.data.ProductName = null;
              return true;
            }
          } else {
            params.data.ProductTypeName = null;
            params.data.ProductTypeCode = null;
            params.data.ScaleName = null;
            params.data.ProductID = null;
            params.data.ProductName = null;
            return false;
          }
        },
        editable: () => {
          return this.IsEditable;
        },
        width: 120,
        resizable: true,
      },
      {
        headerName: 'کالا/خدمت',
        field: 'ProductName',
        cellEditorFramework: NgSelectVirtualScrollComponent,
        cellEditorParams: {
          Params: this.NgSelectVSParams,
          Items: [],
          MoreFunc: this.FetchMoreProduct,
          FetchByTerm: this.FetchProductByTerm,
          RedioChangeFunc: this.RedioSelectedChange,
          Owner: this
        },
        cellRenderer: 'SeRender',
        valueFormatter: function currencyFormatter(params) {
          if (params.value) {
            return params.value.ProductName;
          } else {
            return '';
          }
        },
        valueSetter: (params) => {
          if (params.newValue && params.newValue.ProductName) {
            params.data.ProductName = params.newValue.ProductName;
            params.data.ProductID = params.newValue.ProductID;
            this.ProductRequest.GetProductScaleName(params.newValue.ProductID).subscribe(res => {
              params.data.ScaleName = res;
            });
            return true;
          } else {
            params.data.ProductName = '';
            params.data.ProductID = null;
            params.data.ScaleName = '';
            return false;
          }
        },
        editable: () => {
          return this.IsEditable;
        },
        width: 350,
        resizable: true
      },
      // {
      //   headerName: 'محصول',
      //   field: 'ProductName',
      //   width: 500,
      //   resizable: true,
      //   editable: true,
      // },
      {
        headerName: 'تعداد درخواست',
        field: 'Qty',
        width: 300,
        resizable: true,
        editable: true,
      },
      {
        headerName: 'تعداد باقیمانده',
        field: 'RemainQty',
        width: 100,
        resizable: true
      },
    ]
  }

  MenuRowClick(InputValue: number) {
    this.selectedMenuID = InputValue;
  }


  onGridReadyMenu(params: { api: any; }) {
    this.gridApiMenu = params.api;
  }


  FastMenuRowClick(InputValue: number) {
    this.selectedFastMenuID = InputValue;
  }


  onGridReadyFastMenu(params: { api: any; }) {
    this.gridApiFastMenu = params.api;
  }


  addSelectedToMenu() {
    this.selectedFastMenuItem = this.gridApiFastMenu.getSelectedRows();
    if (this.selectedFastMenuItem != null) {
      this.gridApiFastMenu.updateRowData({ remove: this.selectedFastMenuItem });
      this.selectedFastMenuItem.forEach((item) => {
        this.gridApiMenu.updateRowData({ add: [item] });
      });
    }
    this.RefreshItemNoFastMenu();
    this.RefreshItemNoMenu();
  }
  addSelectedToFastMenu() {
    this.selectedMenuItem = [];
    //   this.selectedMenuItem = this.gridApiMenu.getSelectedRows();
    this.gridApiMenu.forEachNode(node => {
      if (node.data.IsChosen) {
        this.selectedMenuItem.push(node.data);
      }
    });

    if (this.selectedMenuItem != null) {
      const fastMenuCount = this.gridApiFastMenu.getDisplayedRowCount();
      this.gridApiMenu.updateRowData({ remove: this.selectedMenuItem });
      if (fastMenuCount === 0) {
        this.selectedMenuItem.forEach((item) => {
          this.gridApiFastMenu.updateRowData({ add: [item] });
        });
      } else {
        const lastIndex = this.gridApiFastMenu.getLastDisplayedRow();
        const tempData = [];
        this.gridApiFastMenu.forEachNode(node => tempData.push(node.data));
        let abc: number;
        abc = lastIndex + 1;
        const xx = tempData.filter(x => x.ItemNo === abc)[0];
        this.selectedMenuItem.forEach((item) => {
          this.gridApiFastMenu.updateRowData({ add: [item] });
        });
      }
    }

    this.RefreshItemNoFastMenu();
    this.RefreshItemNoMenu();
  }


  addAllToFastMenu() {
    const rowData = [];
    this.gridApiMenu.forEachNode(node => rowData.push(node.data));
    this.gridApiMenu.updateRowData({ remove: rowData });

    const fastMenuCount = this.gridApiFastMenu.getDisplayedRowCount();
    this.gridApiMenu.updateRowData({ remove: this.selectedMenuItem });
    if (fastMenuCount === 0) {
      rowData.forEach((item) => {
        this.gridApiFastMenu.updateRowData({ add: [item] });
      });
    } else {
      const lastIndex = this.gridApiFastMenu.getLastDisplayedRow();
      const tempData = [];
      this.gridApiFastMenu.forEachNode(node => tempData.push(node.data));
      let abc: number;
      abc = lastIndex + 1;
      const xx = tempData.filter(x => x.ItemNo === abc)[0];
      let maxOrderNo = xx.OrderNo + 1;
      rowData.forEach((item) => {
        this.gridApiFastMenu.updateRowData({ add: [item] });
        maxOrderNo++;
      });
      this.RefreshItemNoFastMenu();
      this.RefreshItemNoMenu();
    }
  }

  RefreshItemNoFastMenu() {
    let CurrItemNo = 0;
    const itemsToUpdate = [];
    this.gridApiFastMenu.forEachNode(function (node) {
      if (node.data.ItemNo) {
        CurrItemNo++;
        node.data.ItemNo = CurrItemNo;
        itemsToUpdate.push(node.data);
      }
    });
    this.gridApiFastMenu.updateRowData({ update: itemsToUpdate });
  }
  RefreshItemNoMenu() {
    let CurrItemNo = 0;
    const itemsToUpdate = [];
    this.gridApiMenu.forEachNode(function (node) {
      if (node.data.ItemNo) {
        CurrItemNo++;
        node.data.ItemNo = CurrItemNo;
        itemsToUpdate.push(node.data);
      }
    });
    this.gridApiMenu.updateRowData({ update: itemsToUpdate });
  }

  addAllToMenu() {
    const rowData = [];
    this.gridApiFastMenu.forEachNode(node => rowData.push(node.data));
    this.gridApiFastMenu.updateRowData({ remove: rowData });
    rowData.forEach((item) => {
      this.gridApiMenu.updateRowData({ add: [item] });
    });

    this.RefreshItemNoFastMenu();
    this.RefreshItemNoMenu();
  }

  oncellEditingStarted(event) { 
    this.gridApiFastMenu.forEachNode(node => {
      if (node.rowIndex === event.rowIndex) {
        this.ProdcutTypeCode = node.data.ProductTypeName && node.data.ProductTypeName.ProductTypeCode
          ? node.data.ProductTypeName.ProductTypeCode
          : node.data.ProductTypeCode ? node.data.ProductTypeCode : 0;
      }
    });

    if (event.colDef && event.colDef.field === 'ProductName') {
      this.columnDef[2].cellEditorParams.Params.loading = true;
      this.ProductRequest.GetProductList(0,
        null,
        '',
        1,
        30,
        this.ProdcutTypeCode,
        true,
        event.data.ProductID).
        subscribe(res => {
          this.columnDef[2].cellEditorParams.Params.loading = false;
          this.RefreshPersonItems.RefreshItemsVirtualNgSelect({
            List: res.List,
            TotalItemCount: res.TotalItemCount,
            PageCount: Math.ceil(res.TotalItemCount / 30)
          });
        });
    }
  }
  
  FetchMoreProduct(event) {
    event.Owner.columnDef[2].cellEditorParams.Params.loading = true;
    const ResultList = [];
    // tslint:disable-next-line:no-shadowed-variable
    const promise = new Promise((resolve, reject) => {
      event.Owner.ProductRequest.GetProductList(event.SearchOption,
        null,
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
        PageCount: Math.ceil(TotalItemCount / 30)
      });
    });
  }

  
  FetchProductByTerm(event) {
    event.Owner.columnDef[2].cellEditorParams.Params.loading = true;
    event.Owner.ProductRequest.GetProductList(event.SearchOption,
      null,
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
          PageCount: Math.ceil(res.TotalItemCount / 30)
        });
      });
  }

  
  RedioSelectedChange(event) {
    event.Owner.columnDef[2].cellEditorParams.Params.loading = true;
    event.Owner.ProductRequest.GetProductList(event.SearchOption,
      null,
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
          PageCount: Math.ceil(res.TotalItemCount / 30)
        });
      });
  }

  Request() {
    this.gridApiFastMenu.stopEditing();
    this.gridApiFastMenu.forEachNode(node => {
      if (node.data.Qty > node.data.RemainQty) {
        this.IsMore = true;
        this.ShowMessageBoxWithOkBtn('اقلام انتخابی بیشتر از میزان مجاز است');
      }
    });
    if (this.IsMore == false) {
      this.type = 'pure-product-request-page';
      this.HaveHeader = true;
      this.btnclicked = true;
      this.startLeftPosition = 5;
      this.startTopPosition = 5;
      this.HaveMaxBtn = true;
      this.HeightPercentWithMaxBtn = 97
      this.PercentWidth = 90;
      this.MainMaxwidthPixel = 2000;
      this.MinHeightPixel = 645;
      const CustomerOrderItemsList = [];

      this.gridApiFastMenu.forEachNode(node => {
        node.data.QTY = node.data.Qty;
        node.data.Subject = node.data.Note;
        node.data.CustomerOrderItemID = node.data.CustomerOrderItemID;
        CustomerOrderItemsList.push(node.data);

      });

      this.paramObj = {
        CustomerOrderID: this.CustomerOrderID,
        ProductRequestItemList: CustomerOrderItemsList,
        CostFactorID: -1,
        WorkFlowID: null,
        ReadyToConfirm: null,
        IsRegionReadOnly: false,
        DisableCustomerOrder: true,

      };

      return;
    }

  }

  ShowMessageBoxWithOkBtn(message) {
    this.btnclicked = true;
    this.type = 'message-box';
    this.HaveHeader = true;
    this.HaveMaxBtn = false;
    this.startLeftPosition = 530;
    this.startTopPosition = 200;
    this.alertMessageParams.message = message;
    this.alertMessageParams.HaveOkBtn = true;
    this.alertMessageParams.HaveYesBtn = false;
    this.alertMessageParams.HaveNoBtn = false;
  }
  getOutPutParam(event) {
    if (this.type === 'message-box') {
      this.IsMore = false;
    }
  }

  popupclosed() {
    this.btnclicked = false;
    this.HaveHeader = null;
    this.HaveMaxBtn = null;
    this.startLeftPosition = null;
    this.startTopPosition = null;
    this.HeightPercentWithMaxBtn = null;
    this.PercentWidth = null;
    this.MainMaxwidthPixel = null;
    this.MinHeightPixel = null;
  }

  Close() {
    this.btnclicked = false;
    this.Closed.emit(true);
  }
}
