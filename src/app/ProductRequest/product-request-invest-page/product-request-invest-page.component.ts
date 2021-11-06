import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { of } from 'rxjs';
import { ProductRequestService } from 'src/app/Services/ProductRequest/ProductRequestService';
import { ActorService } from 'src/app/Services/BaseService/ActorService';
@Component({
  selector: 'app-product-request-invest-page',
  templateUrl: './product-request-invest-page.component.html',
  styleUrls: ['./product-request-invest-page.component.css']
})
export class ProductRequestInvestPageComponent implements OnInit {
  @Input() PopupParam;
  @Output() PopupOutPut: EventEmitter<any> = new EventEmitter<any>();
  @Output() Closed: EventEmitter<boolean> = new EventEmitter<boolean>();
  alertMessageParams = { HaveOkBtn: true, message: '' };
  Subject;
  CheckValidate = false;
  btnclicked = false;
  ProductRequestNo;
  BaseShareValue;
  BasicOperationPeriod;
  ProductRequestDate;
  ContractorPageCount;
  ContractorTotalItemCount;
  InvestTypeItems;
  ContractObject;
  ProductRequestObject;
  ContractorItems;
  UseDuration;
  InvestActorID = null;
  Percent;
  SalesCommition;
  ProductRequestInvestID;
  HaveHeader;
  HaveMaxBtn;
  MonthlyRentAmount;
  startLeftPosition;
  startTopPosition;
  InvestTypeParams = {
    bindLabelProp: 'InvestTypeName',
    bindValueProp: 'InvestTypeCode',
    placeholder: '',
    selectedObject: null,
    loading: false,
    IsVirtualScroll: false,
    IsDisabled: false,
    Required: true
  };
  InvestUsageTypeItems;
  InvestUsageTypeParams = {
    bindLabelProp: 'InvestUsageTypeName',
    bindValueProp: 'InvestUsageTypeCode',
    placeholder: '',
    selectedObject: null,
    loading: false,
    IsVirtualScroll: false,
    IsDisabled: false,
    Required: true
  };
  NgSelectContractorParams = {
    bindLabelProp: 'ActorName',
    bindValueProp: 'ActorId',
    placeholder: '',
    MinWidth: '150px',
    PageSize: 30,
    PageCount: 0,
    TotalItemCount: 0,
    selectedObject: null,
    loading: false,
    IsVirtualScroll: true,
    IsDisabled: false,
    Required: true,
    type: 'product-request-contract-contractor',
    DropDownMinWidth: '300px',
    AdvanceSearch: {
      SearchLabel: 'جستجو:',
      SearchItemDetails:
        [{ HeaderCaption: 'کد ملي', HeaderName: 'IdentityNo', width: 35, MinTermLenght: 10, SearchOption: 'IdentityNo' },
        // tslint:disable-next-line:max-line-length
        { HeaderCaption: 'نام و نام خانوادگي', HeaderName: 'ActorName', width: 53, MinTermLenght: 3, SearchOption: 'ActorName' }],
      SearchItemHeader:
        [{ HeaderCaption: 'کد ملي', width: 35, },
        { HeaderCaption: 'نام و نام خانوادگي', width: 53, }],
      HaveItemNo: true,
      ItemNoWidth: 16
    }
  };
  ContractorType = true;
  CommunicteDate;
  IsPercentValue = true;
  PopUpType;
  MunicipalityFound;
  MunicipalityFoundAmount;
  InvestorFound;
  InvestorFoundAmount;
  TechnicalSpec;
  rent: boolean = false;
  period: boolean = false;
  percent : boolean =false;

  constructor(private ProductRequest: ProductRequestService,
    private Actor: ActorService) { }

  ngOnInit() {
    this.ProductRequestObject = this.PopupParam.ProductRequestObject;
    this.ContractObject = this.ProductRequestObject.ContractObject;
    this.Subject = this.ProductRequestObject.Subject;
    this.ProductRequestDate = this.ProductRequestObject.ShortProductRequestDate;
    this.ProductRequestNo = this.ProductRequestObject.ProductRequestNo;
    this.BaseShareValue = this.ProductRequestObject.BaseShareValue;
    this.BasicOperationPeriod = this.ProductRequestObject.BasicOperationPeriod;
    this.ProductRequest.GetInvestType(true).subscribe(res => {
      this.InvestTypeItems = res;
    });
    this.ProductRequest.GetInvestUsageType().subscribe(ress => {
      this.InvestUsageTypeItems = ress;
    });
    this.ProductRequest.GetProductRequestInvest(this.ProductRequestObject.CostFactorID).subscribe(res => {
      if (res) {
        this.ProductRequestInvestID = res.ProductRequestInvestID;
        this.InvestTypeParams.selectedObject = res.InvestTypeCode;
        this.InvestUsageTypeParams.selectedObject = res.InvestUsageTypeCode;
        this.UseDuration = res.UseDuration;
        this.InvestActorID = res.ActorID;
        this.SalesCommition = res.SalesCommition;
        this.Percent = res.Percent;
        this.IsPercentValue = res.IsPercentValue;
        this.ContractorType = res.ActorType;
        this.CommunicteDate = res.ShortCommunicteDate;
        this.MunicipalityFound = res.MunicipalityFound;
        this.MunicipalityFoundAmount = (res.MunicipalityFoundAmount && res.MunicipalityFoundAmount !== null) ? res.MunicipalityFoundAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';
        this.InvestorFound = res.InvestorFound;
        this.InvestorFoundAmount = (res.InvestorFoundAmount && res.InvestorFoundAmount !== null) ? res.InvestorFoundAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';
        this.TechnicalSpec = res.TechnicalSpec;
        this.MonthlyRentAmount = res.MonthlyRentAmount;
        this.BaseShareValue = res.BaseShareValue;
        this.BasicOperationPeriod = res.BasicOperationPeriod;
      }
      this.Actor.GetActorPaging(1, 30, '', 'IdentityNo', this.ContractorType, false, false, this.InvestActorID).subscribe(resss => {
        this.ContractorItems = resss.List;
        this.ContractorTotalItemCount = resss.TotalItemCount;
        this.ContractorPageCount = Math.ceil(resss.TotalItemCount / 30);
      });
      this.NgSelectContractorParams.selectedObject = this.InvestActorID;
    });
  }
  onChangeInvestType(event) {
    this.rent =false;
    this.period =false;
    this.percent =false;
    switch (event) {
      case 4:
        this.rent = true;
        this.period = true;
        this.percent =true;
        break;
      case 5:
        this.period = true;
        this.percent =true;
        break;
      case 3:
        this.period = true;
        this.percent =true;
      case 9:
        this.rent = true;
        this.period = true;
        this.percent =true;
      case 8:
        this.rent = true;
        this.period = true;
        this.percent =true;
      case 10:
        this.period = true;
        this.percent =true;
      case 12:
        this.period = true;
        this.percent =true;
      case 14:
        this.period = true;
        this.percent =true;
        break;
      default:
        break;
    }
  }
  onChangeInvestUsageType(Type) {

  }
  rdoContractorTypeClick(Type) {
    this.ContractorType = Type;
    this.ContractorItems = [];
    this.NgSelectContractorParams.selectedObject = null;
    if (this.ContractorType) {
      this.NgSelectContractorParams.AdvanceSearch.SearchItemDetails[0].HeaderCaption = 'کد ملي';
      this.NgSelectContractorParams.AdvanceSearch.SearchItemDetails[1].HeaderCaption = 'نام و نام خانوادگي';
      this.NgSelectContractorParams.AdvanceSearch.SearchItemDetails[0].MinTermLenght = 10;
      this.NgSelectContractorParams.AdvanceSearch.SearchItemHeader[0].HeaderCaption = 'کد ملي';
      this.NgSelectContractorParams.AdvanceSearch.SearchItemHeader[1].HeaderCaption = 'نام و نام خانوادگي';
      // this.NgSelectContractorParams.bindLabelProp = 'PersonName';
    } else {
      this.NgSelectContractorParams.AdvanceSearch.SearchItemDetails[0].HeaderCaption = 'شناسه ملي ';
      this.NgSelectContractorParams.AdvanceSearch.SearchItemDetails[1].HeaderCaption = 'نام شخص';
      this.NgSelectContractorParams.AdvanceSearch.SearchItemDetails[0].MinTermLenght = 3;
      this.NgSelectContractorParams.AdvanceSearch.SearchItemHeader[0].HeaderCaption = 'شناسه ملي ';
      this.NgSelectContractorParams.AdvanceSearch.SearchItemHeader[1].HeaderCaption = 'نام شخص';
      // this.NgSelectContractorParams.bindLabelProp = 'CorporateName';
    }
    this.Actor.GetActorPaging(1, 30, '', 'IdentityNo', this.ContractorType, false, false).subscribe(res => {
      this.ContractorItems = res.List;
      this.ContractorTotalItemCount = res.TotalItemCount;
      this.ContractorPageCount = Math.ceil(res.TotalItemCount / 30);
    });
  }
  popupclosed() {
    this.btnclicked = false;
  }
  Close() {
    this.Closed.emit(true);
  }
  FetchMoreContractor(event) {
    const ResultList = [];
    this.NgSelectContractorParams.loading = true;
    this.Actor.GetActorPaging(event.PageNumber,
      event.PageSize,
      event.term,
      event.SearchOption,
      this.ContractorType,
      false, false).subscribe(res => {
        event.CurrentItems.forEach(el => {
          ResultList.push(el);
        });
        res.List.forEach(element => {
          ResultList.push(element);
        });
        this.ContractorItems = ResultList;
        this.NgSelectContractorParams.loading = false;
      }
      );
  }
  doContractorSearch(event) {
    this.NgSelectContractorParams.loading = true;
    this.Actor.GetActorPaging(event.PageNumber,
      event.PageSize,
      event.term,
      event.SearchOption,
      this.ContractorType,
      false, false).subscribe(res => {
        this.ContractorItems = res.List;
        this.ContractorTotalItemCount = res.TotalItemCount;
        this.ContractorPageCount = Math.ceil(res.TotalItemCount / 30);
        this.NgSelectContractorParams.loading = false;
      });
  }
  onSave() {
    this.CheckValidate = true;
    if (!this.InvestTypeParams.selectedObject ||
      this.InvestTypeParams.selectedObject === null ||
      !this.InvestUsageTypeParams.selectedObject ||
      this.InvestUsageTypeParams.selectedObject === null ||
      (!this.MunicipalityFound || this.MunicipalityFound === null) ||
      (!this.InvestorFound || this.InvestorFound === null)) {
      this.ShowMessageBoxWithOkBtn('فیلد های ستاره دار را پر نمایید');
      return;
    }

    if(this.rent && (this.MonthlyRentAmount === null || this.BasicOperationPeriod === null))
    {
      this.ShowMessageBoxWithOkBtn('فیلد های ستاره دار را پر نمایید');
      return;
    }
    
    if(this.period && (this.MonthlyRentAmount === null))
    {
      this.ShowMessageBoxWithOkBtn('فیلد های ستاره دار را پر نمایید');
      return;
    }

    if(this.percent && (this.Percent === null))
    {
      this.ShowMessageBoxWithOkBtn('فیلد های ستاره دار را پر نمایید');
      return;
    }

    const ProductRequestInvestObj = {
      ProductRequestInvestID: this.ProductRequestInvestID ? this.ProductRequestInvestID : -1,
      CostFactorID: this.ProductRequestObject.CostFactorID,
      InvestTypeCode: this.InvestTypeParams.selectedObject,
      InvestUsageTypeCode: this.InvestUsageTypeParams.selectedObject,
      UseDuration: this.UseDuration,
      ActorID: this.NgSelectContractorParams.selectedObject,
      SalesCommition: this.SalesCommition,
      Percent: this.Percent,
      CommunicteDate: this.CommunicteDate,
      IsPercentValue: this.IsPercentValue,
      MunicipalityFound: this.MunicipalityFound,
      MunicipalityFoundAmount: this.MunicipalityFoundAmount ? parseFloat((this.MunicipalityFoundAmount).replace(/,/g, '')) : null,
      InvestorFound: this.InvestorFound,
      InvestorFoundAmount: this.InvestorFoundAmount ? parseFloat((this.InvestorFoundAmount).replace(/,/g, '')) : null,
      TechnicalSpec: this.TechnicalSpec,
      MonthlyRentAmount: this.MonthlyRentAmount,
      BaseShareValue: this.BaseShareValue,
      BasicOperationPeriod: this.BasicOperationPeriod
    };
    this.ProductRequest.SaveProductRequestInvest(ProductRequestInvestObj).subscribe(
      res => {
        this.ShowMessageBoxWithOkBtn('ثبت با موفقيت انجام شد');
      },
      err => {
        this.ShowMessageBoxWithOkBtn('ثبت با خطا مواجه شد');
      }
    );
  }
  ShowMessageBoxWithOkBtn(message) {
    this.btnclicked = true;
    this.PopUpType = 'message-box';
    this.HaveHeader = true;
    this.startLeftPosition = 449;
    this.startTopPosition = 87;
    this.alertMessageParams.message = message;
    this.alertMessageParams.HaveOkBtn = true;
  }
  IsPerecentClick(Type) {
    this.IsPercentValue = Type;
  }
  OnProductRequestDateChange(ADate) {
    this.ProductRequestDate = ADate.MDate;
    this.CommunicteDate = ADate.MDate;
  }
  BaseShareValueChange(event) {
    this.BaseShareValue = event;
  }
  BasicOperationPeriodChange(event) {
    this.BasicOperationPeriod = event;
  }
  MunicipalityFoundAmountChange(event) {
    this.MunicipalityFoundAmount = event;
  }
  InvestorFoundAmountChange(event) {
    this.InvestorFoundAmount = event;
  }
}
