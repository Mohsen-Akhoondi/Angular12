import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegionListService } from 'src/app/Services/BaseService/RegionListService';
import { ActorService } from 'src/app/Services/BaseService/ActorService';
import { ProductRequestService } from 'src/app/Services/ProductRequest/ProductRequestService';
import { TemplateRendererComponent } from 'src/app/Shared/grid-component/template-renderer/template-renderer.component';
import { isNumber, isNullOrUndefined } from 'util';

@Component({
  selector: 'app-providers-search-page',
  templateUrl: './providers-search-page.component.html',
  styleUrls: ['./providers-search-page.component.css']
})
export class ProvidersSearchPageComponent implements OnInit {
  @ViewChild('ShowInformations') ShowInformations: TemplateRef<any>;
  ////////////////// حقوقی ///////////////////////////////////
  private CgridApi;
  CorporatecolumnDef;
  CorporaterowData: any = [];
  ////////////////// حقیقی ///////////////////////////////////
  private PgridApi;
  PersoncolumnDef;
  PersonrowData: any = [];
  ////////////////////////////////////////////////////////////
  IsCorporate = true;
  Name;
  IdentityNo;
  ProviderDate;
  Cell;
  BusinessPatternParams =
    {
      bindLabelProp: 'BusinessPatternName',
      bindValueProp: 'BusinessPatternID',
      selectedObject: null,
      IsDisabled: false,
      loading: false,
      MinWidth: '100px',
      DropDownMinWidth: '200px',
      IsVirtualScroll: false,
      type: 'business-pattern'
    };
  BusinessPatternItems;
  BusinessPatternCode;
  RegionParams = {
    bindLabelProp: 'RegionName',
    bindValueProp: 'RegionCode',
    placeholder: '',
    MinWidth: '155px',
    selectedObject: null,
    loading: false,
    IsVirtualScroll: false,
    Required: true
  };
  RegionItems;
  RegionCode;
  RoleParams =
    {
      bindLabelProp: 'RoleName',
      bindValueProp: 'RoleID',
      selectedObject: null,
      IsDisabled: false,
      loading: false,
      MinWidth: '100px',
      DropDownMinWidth: '200px',
      IsVirtualScroll: false,
      type: 'Role'
    };
  RoleItems;
  RoleID;
  LoginName;
  ////////////////////////////////////////////////////////////
  alertMessageParams = { HaveOkBtn: true, message: '', HaveYesBtn: false, HaveNoBtn: false };
  isClicked: boolean;
  PopUpType: string;
  HaveHeader: boolean;
  startLeftPosition: number;
  startTopPosition: number;
  PopupParam;
  HaveMaxBtn = false;
  PercentWidth;
  MinHeightPixel;
  PixelHeight;
  MainMaxwidthPixel;
  OverMainMinwidthPixel;
  PixelWidth;
  private sub: any;
  ModuleCode;
  SupplierName;
  ExeUnitItems;
  UnitPatternID;
  VWExeUnitParams = {
    bindLabelProp: 'UnitTopicName',
    bindValueProp: 'UnitPatternID',
    placeholder: '',
    MinWidth: '155px',
    selectedObject: null,
    loading: false,
    IsVirtualScroll: false,
    IsDisabled: false,
    Required: true,
    type: 'ExeUnit'
  };

  constructor(private router: Router,
    private RegionList: RegionListService,
    private Actor: ActorService,
    private ProductRequest: ProductRequestService,
    private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.ModuleCode = +params['ModuleCode'];
    });
  }
  ngOnInit() {
    this.RoleItems = [
      { RoleName: 'پیمانکار', RoleID: 1 },
      { RoleName: 'مشاور', RoleID: 2 },
      { RoleName: 'تولید کننده', RoleID: 3 },
      { RoleName: 'تامین کننده', RoleID: 4 },
      { RoleName: 'سازنده داخلی', RoleID: 5 },
      { RoleName: 'سازنده خارجی', RoleID: 6 }
    ];
  }
  OnProviderDateChange(ADate) {
    this.ProviderDate = ADate.MDate;
  }
  Search() {
    // const IsCorporate = this.IsCorporate;
    this.Actor.ProvidersSearch(
      this.IsCorporate,
      this.Name,
      this.IdentityNo,
      this.ProviderDate,
      this.Cell,
      this.BusinessPatternCode,
      this.VWExeUnitParams.selectedObject,
      this.RoleID,
      this.LoginName
    ).subscribe(res => {
      if (this.IsCorporate) {
        this.CorporaterowData = res;
      } else {
        this.PersonrowData = res;
      }
    });
  }
  RadioIsCorporateClick(event) {
    this.IsCorporate = event;
    this.PersonrowData = [];
    this.CorporaterowData = [];
    this.Name = '';
    this.IdentityNo = '';
    this.ProviderDate = '';
    this.Cell = '';
    this.LoginName = '';
  }
  onCorporateGridReady(params: { api: any; }) {
    this.CgridApi = params.api;
  }
  onPersonGridReady(params: { api: any; }) {
    this.PgridApi = params.api;
  }
  onShowInformationsClick(row) {
    if (row.ActorID && row.ActorID != null && !row.IsCorporate) {
      this.PopUpType = 'person2';
      this.isClicked = true;
      this.startLeftPosition = 40;
      this.startTopPosition = 10;
      this.PixelHeight = 650;
      this.MinHeightPixel = 650;
      this.PixelWidth = 1280;
      this.MainMaxwidthPixel = 1280;
      // this.OverMainMinwidthPixel = 1280;
      this.PercentWidth = 96;
      this.PopupParam = {
        ActorId: row.ActorID,
        ObjectID: row.ActorID,
        HaveWF: false, // 53445
        ModuleViewTypeCode: this.ModuleCode === 2893 ? 200000 : this.ModuleCode === 2885 ? 500000 : 2,
        HeaderName: 'تامین کننده حقیقی',
      };

    }
    if (row.ActorID && row.ActorID != null && row.IsCorporate) {
      this.PopUpType = 'corporate2';
      this.isClicked = true;
      this.startLeftPosition = 40;
      this.startTopPosition = 10;
      this.PixelHeight = 650;
      this.MinHeightPixel = 650;
      this.PixelWidth = 1280;
      this.MainMaxwidthPixel = 1280;
      // this.OverMainMinwidthPixel = 1280;
      this.PercentWidth = 96;
      this.PopupParam = {
        CorporateID: row.ActorID,
        ObjectID: row.ActorID,
        ModuleViewTypeCode: this.ModuleCode === 2893 ? 200000 : this.ModuleCode === 2885 ? 500000 : 2,
        HeaderName: 'تامین کننده حقوقی',
      };

    }
  }
  onClose() {
    this.router.navigate([{ outlets: { primary: 'Home', PopUp: null } }]);
  }
  popupclosed(event) {
    this.isClicked = false;
    this.PopUpType = '';
    this.HaveMaxBtn = false;
  }
  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit(): void {
    this.CorporatecolumnDef = [
      {
        headerName: 'رديف ',
        field: 'ItemNo',
        width: 100,
        resizable: true,
      },
      {
        headerName: 'مشاهده جزئیات ',
        field: '',
        width: 130,
        resizable: false,
        cellStyle: function (params) {
          return { 'text-align': 'center' };
        },
        cellRendererFramework: TemplateRendererComponent,
        cellRendererParams: {
          ngTemplate: this.ShowInformations,
        }
      },
      {
        headerName: 'نام شرکت ',
        field: 'ActorName',
        width: 300,
        resizable: true,
      },
      {
        headerName: 'نام کاربری ',
        field: 'LoginName',
        width: 200,
        resizable: true,
      },
      {
        headerName: 'شناسه ملی ',
        field: 'IdentityNo',
        width: 130,
        resizable: true,
      },
      {
        headerName: 'تاریخ ثبت ',
        field: 'RegisterDate',
        width: 100,
        resizable: true,
      },
      {
        headerName: 'محل هزینه',
        field: 'UnitTopicName',
        width: 160,
        resizable: true
      },
      {
        headerName: 'کسب و کار',
        field: 'BusinessPatternName',
        width: 160,
        resizable: true,
      },
      {
        headerName: 'شماره همراه',
        field: 'Cell',
        width: 140,
        resizable: true,
      },
      {
        headerName: 'شماره ثبت',
        field: 'RegisterNo',
        width: 140,
        resizable: true,
      },
      {
        headerName: 'کد اقتصادی',
        field: 'EconomicCode',
        width: 140,
        resizable: true,
      },
      {
        headerName: 'کد پستی',
        field: 'PostCode',
        width: 140,
        resizable: true,
      },
      {
        headerName: 'تلفن ثابت',
        field: 'Tel',
        width: 140,
        resizable: true,
      },
      {
        headerName: 'رشته فعالیت',
        field: 'ActivityFieldName',
        width: 140,
        resizable: true,
      },
      {
        headerName: 'محل',
        field: 'LocationName',
        width: 140,
        resizable: true,
      },
      // {
      //   headerName: 'نقش',
      //   field: 'RoleName',
      //   width: 140,
      //   resizable: true,
      // },
      {
        headerName: 'نماینده شرکت',
        field: 'CompanyAgentName',
        width: 140,
        resizable: true,
      },
      {
        headerName: 'شماره تماس نماینده شرکت',
        field: 'CompanyAgentTell',
        width: 170,
        resizable: true,
      },
    ];
    this.PersoncolumnDef = [
      {
        headerName: 'رديف ',
        field: 'ItemNo',
        width: 100,
        resizable: true,
      },
      {
        headerName: 'مشاهده جزئیات ',
        field: '',
        width: 130,
        resizable: false,
        cellStyle: function (params) {
          return { 'text-align': 'center' };
        },
        cellRendererFramework: TemplateRendererComponent,
        cellRendererParams: {
          ngTemplate: this.ShowInformations,
        }
      },
      {
        headerName: 'نام شخص ',
        field: 'ActorName',
        width: 300,
        resizable: true,
      },
      {
        headerName: 'نام کاربری ',
        field: 'LoginName',
        width: 200,
        resizable: true,
      },
      {
        headerName: 'کد ملی ',
        field: 'IdentityNo',
        width: 130,
        resizable: true,
      },
      {
        headerName: 'تاریخ تولد ',
        field: 'BirthDate',
        width: 100,
        resizable: true,
      },
      {
        headerName: 'شماره همراه',
        field: 'Cell',
        width: 140,
        resizable: true,
      },
      {
        headerName: 'آدرس محل سکونت',
        field: 'HomeAddress',
        width: 200,
        resizable: true,
      },
      {
        headerName: 'تلفن محل سکونت',
        field: 'HomeTell',
        width: 140,
        resizable: true,
      },
      // {
      //   headerName: 'نقش',
      //   field: '',
      //   width: 140,
      //   resizable: true,
      // }
    ];
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
  OnOpenNgSelect(event) {
    switch (event) {
      case 'Region':
        this.RegionList.GetRegionList(this.ModuleCode, true).subscribe(res => {
          this.RegionItems = res;
        });
        break;
      case 'BusinessPattern':
        this.Actor.GetBusinessPatternListByUnitPatternID(this.UnitPatternID, false).subscribe(res => {
          this.BusinessPatternItems = res;
        });
        break;
        case 'ExeUnit':
          this.ProductRequest.GetVWExeUnit().subscribe(res => {
            this.ExeUnitItems = res;
          });
          break;
      default:
        break;
    }
  }
  onChangeBusinessPattern(event) {
    this.BusinessPatternCode = event;
  }
  onChangeExeUnit(event) {
    this.UnitPatternID = event;
    this.RegionCode = this.ExeUnitItems.find(x => x.UnitPatternID === event).RegionCode;
  }
  onChangeRole(event) {
    this.RoleID = event;
  }

}
