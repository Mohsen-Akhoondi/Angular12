import { Component, OnInit, EventEmitter, Input, Output, } from '@angular/core';
import { RefreshServices } from 'src/app/Services/BaseService/RefreshServices';
import { ActorService } from 'src/app/Services/BaseService/ActorService';
import { CustomerOrderService } from 'src/app/Services/CRM/CustomerOrderService';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-order-search',
  templateUrl: './customer-order-search.component.html',
  styleUrls: ['./customer-order-search.component.css']
})
export class CustomerOrderSearchComponent implements OnInit {
  @Output() Closed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() ModuleCode;
  HaveMaxBtn = false;
  MinHeightPixel: number;
  PercentWidth: number;
  MainMaxwidthPixel: any;
  HeightPercentWithMaxBtn: number;
  paramObj;
  PersonReqItems: any;
  selectedRow: any;
  rowData = [];
  AgridApi: any;
  BtnClickedName: string;
  FromOrderRequestCode: number;
  ToOrderRequestCode: number;
  FromOrderRequestDate;
  ToOrderRequestDate;
  CustomerID: number;
  columnDef;
  type: string;
  HaveHeader: boolean;
  btnclicked = false;
  startLeftPosition: number;
  startTopPosition: number;
  private sub: any;
  alertMessageParams = { HaveOkBtn: true, message: '', HaveYesBtn: false, HaveNoBtn: false };
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

  ContractorType = true;

  constructor(private ActorList: ActorService,
    private RefreshPersonItems: RefreshServices,
    private CustomerOrder: CustomerOrderService,
    private router: Router,
    private route: ActivatedRoute,) {
    this.sub = this.route.params.subscribe(params => {
      this.ModuleCode = +params['ModuleCode'];
    });

  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.columnDef = [
      {
        headerName: 'ردیف ',
        field: 'ItemNo',
        width: 80,
        resizable: true
      },
      {
        headerName: 'نام مشتری',
        field: 'FullCustomerName',
        width: 300,
        resizable: true
      },
      {
        headerName: 'شماره سفارش مشتری',
        field: 'CustomerOrderCode',
        width: 200,
        resizable: true
      },
      {
        headerName: ' تاریخ سفارش ',
        field: 'PersianCustomerOrderDate',
        width: 200,
        resizable: true
      },
      {
        headerName: ' موضوع ',
        field: 'Subject',
        width: 500,
        resizable: true
      },
    ];

  }

  OnFromOrderRequestDateChange(ADate) {
    this.FromOrderRequestDate = ADate.MDate;
  }
  OnToOrderRequestDateChange(ADate) {
    this.ToOrderRequestDate = ADate.MDate;
  }

  OnFromOrderRequestCodeChange(ADate) {
    this.FromOrderRequestCode = ADate.MDate;
  }
  OnToOrderRequestCodeChange(ADate) {
    this.ToOrderRequestCode = ADate.MDate;
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
        this.ContractorType,
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
    this.ActorList.GetActorPaging(1, 30, '', 'ActorID', this.ContractorType, false, false, ActorID).subscribe(res => {
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
      this.ContractorType,
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
  onGridReady(params: { api: any; }) {
    this.AgridApi = params.api;
  }

  RowClick(InputValue) {
    this.selectedRow = InputValue.data;
  }

  Search() {
    this.CustomerID = this.NgSelectPersonReqParams.selectedObject;
    this.CustomerOrder.GetCustomerOrders(
      this.FromOrderRequestCode,
      this.ToOrderRequestCode,
      this.FromOrderRequestDate,
      this.ToOrderRequestDate,
      this.CustomerID).subscribe(res => {
        if (res && res.length > 0) {
          this.rowData = res;
        } else {
          this.type = 'message-box';
          this.HaveHeader = true;
          this.alertMessageParams.message = 'رکوردی جهت نمایش یافت نشد';
          this.btnclicked = true;
          this.startLeftPosition = 500;
          this.startTopPosition = 100;
        }
      });
  }
  Updateclick() {
    if (this.selectedRow == null) {
      this.type = 'message-box';
      this.HaveHeader = true;
      this.alertMessageParams.message = 'سفارشی جهت مشاهده انتخاب نشده است';
      this.btnclicked = true;
      this.HaveMaxBtn = false;
      this.startLeftPosition = 500;
      this.startTopPosition = 250;
      this.MinHeightPixel = null;
      return;
    }
    else {
      this.type = 'customer-order';
      this.HaveHeader = true;
      this.btnclicked = true;
      this.startLeftPosition = 15;
      this.startTopPosition = 5;
      this.HaveMaxBtn = true;
      this.HeightPercentWithMaxBtn = 97;
      this.PercentWidth = 90;
      this.MainMaxwidthPixel = 2000;
      this.MinHeightPixel = 645;
      this.paramObj = {
        CustomerOrderID: this.selectedRow.CustomerOrderID,
        Mode: 'EditMode',
        BTNs: true,
      };
      return;
    }
  }

  popupclosed() {
    this.HaveMaxBtn = false;
    this.btnclicked = false;
    this.PercentWidth = null;
    this.MainMaxwidthPixel = null;
    this.MinHeightPixel = null;
    this.type = '';
    this.HeightPercentWithMaxBtn = 95;
  }
  onDeleteclick() {
    this.BtnClickedName = 'BtnDelete';
    this.ShowMessageBoxWithYesNoBtn('آیا از حذف سفارش مطمئن هستید؟');
  }

  ShowMessageBoxWithYesNoBtn(message) {
    this.btnclicked = true;
    this.type = 'message-box';
    this.HaveHeader = true;
    this.HaveMaxBtn = false;
    this.startLeftPosition = 550;
    this.startTopPosition = 182;
    this.alertMessageParams.message = message;
    this.alertMessageParams.HaveOkBtn = false;
    this.alertMessageParams.HaveYesBtn = true;
    this.alertMessageParams.HaveNoBtn = true;
  }

  MessageBoxAction(ActionResult) {
    if (this.BtnClickedName === 'BtnDelete' && ActionResult === 'YES') {
      this.DoDelete();
    } else {
      this.Closed.emit(true);
    }
    this.type = '';
    this.BtnClickedName = '';
    this.btnclicked = false;
  }
  DoDelete() {
    this.CustomerOrder.DeleteCustomerOrder(this.selectedRow.CustomerOrderID, this.ModuleCode).subscribe(
      res => {
        if (res === true) {
          this.CustomerOrder.GetCustomerOrders(
            this.FromOrderRequestCode,
            this.ToOrderRequestCode,
            this.FromOrderRequestDate,
            this.ToOrderRequestDate,
            this.CustomerID).subscribe(res1 => { this.rowData = res1 });
          this.ShowMessageBoxWithOkBtn('حذف با موفقیت انجام شد');
        } else {
          this.ShowMessageBoxWithOkBtn('خطای پیش بینی نشده');
        }
      });
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


  close() {
    this.btnclicked = false;
    this.router.navigate([{ outlets: { primary: 'Home', PopUp: null } }]);
  }

  rdoContractorTypeClick(Type) {
    this.ContractorType = Type;
    this.NgSelectPersonReqParams.selectedObject = null;
    if (this.ContractorType) {
      this.NgSelectPersonReqParams.AdvanceSearch.SearchItemDetails[0].HeaderCaption = 'شناسه';
      this.NgSelectPersonReqParams.AdvanceSearch.SearchItemDetails[1].HeaderCaption = 'کد ملي';
      this.NgSelectPersonReqParams.AdvanceSearch.SearchItemDetails[2].HeaderCaption = 'نام و نام خانوادگي';
      this.NgSelectPersonReqParams.AdvanceSearch.SearchItemDetails[0].MinTermLenght = 1;
      this.NgSelectPersonReqParams.AdvanceSearch.SearchItemDetails[1].MinTermLenght = 10;
      this.NgSelectPersonReqParams.AdvanceSearch.SearchItemHeader[0].HeaderCaption = 'شناسه';
      this.NgSelectPersonReqParams.AdvanceSearch.SearchItemHeader[1].HeaderCaption = 'کد ملي';
      this.NgSelectPersonReqParams.AdvanceSearch.SearchItemHeader[2].HeaderCaption = 'نام و نام خانوادگي';
    } else {
      this.NgSelectPersonReqParams.AdvanceSearch.SearchItemDetails[0].HeaderCaption = 'شناسه';
      this.NgSelectPersonReqParams.AdvanceSearch.SearchItemDetails[1].HeaderCaption = 'شناسه ملي ';
      this.NgSelectPersonReqParams.AdvanceSearch.SearchItemDetails[2].HeaderCaption = 'نام شخص';
      this.NgSelectPersonReqParams.AdvanceSearch.SearchItemDetails[0].MinTermLenght = 1;
      this.NgSelectPersonReqParams.AdvanceSearch.SearchItemDetails[1].MinTermLenght = 10;
      this.NgSelectPersonReqParams.AdvanceSearch.SearchItemHeader[0].HeaderCaption = 'شناسه';
      this.NgSelectPersonReqParams.AdvanceSearch.SearchItemHeader[1].HeaderCaption = 'شناسه ملي ';
      this.NgSelectPersonReqParams.AdvanceSearch.SearchItemHeader[2].HeaderCaption = 'نام شخص';
    }
  }

}
