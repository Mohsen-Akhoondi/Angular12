import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSettingsService } from 'src/app/Services/BaseService/UserSettingsService';
import { NumberFieldEditableComponent } from 'src/app/Shared/number-field-editable/number-field-editable.component';
import { ProductRequestService } from 'src/app/Services/ProductRequest/ProductRequestService';

@Component({
  selector: 'app-estate-property-type-page',
  templateUrl: './estate-property-type-page.component.html',
  styleUrls: ['./estate-property-type-page.component.css']
})
export class EstatePropertyTypePageComponent implements OnInit {
  HaveMaxBtn = false;
  alertMessageParams = { HaveOkBtn: true, message: '', HaveYesBtn: false, HaveNoBtn: false };
  startLeftPosition: number;
  startTopPosition: number;
  isClicked: boolean;
  PopUpType: string;
  Dto: any;
  ModuleCode;
  columnDef;
  btnclicked = false;
  selectedRow: any;
  type: string;
  paramObj;
  HaveHeader: boolean;
  OverstartLeftPosition: number;
  OverstartTopPosition: number;
  HaveSave = false;
  HaveDelete = false;
  private gridApi;
   @Input() PopupParam;
    RowData: any = [];
  constructor(private route: ActivatedRoute,
              private User: UserSettingsService,
              private router: Router,
              private srv: ProductRequestService ) {
    this.columnDef = [
       {
         headerName: 'ردیف',
         field: 'ItemNo',
         width: 80,
         resizable: true
       },
      {
        headerName: 'کد ویژگی های ملک',
        field: 'EstatePropertyTypeCode',
        width: 120,
        cellEditorFramework: NumberFieldEditableComponent,
        cellEditorParams: { MaxLength: 3},
        cellRenderer: 'SeRender',
        valueFormatter: function currencyFormatter(params) {
          if (params.value) {
            return params.value;
          } else {
            return '';
          }
        },
        resizable: true,
        editable: true
      },
      {
        headerName: 'نام ویژگی های ملک ',
        field: 'EstatePropertyTypeName',
        width: 200,
        resizable: true,
        editable: true
      },
    ];
   }
onGridReady(params: { api: any; }) {
  this.gridApi = params.api;
}

ngOnInit() {
  this.route.params.subscribe(params => {
    this.ModuleCode = +params['ModuleCode'];
  });
  this.User.GetModulOPByUser(this.ModuleCode).subscribe(res => {
    this.HaveSave = false;
    this.HaveDelete = false;
    res.forEach(node => {
      switch (node.OperationCode) {
        case 7:
          this.HaveSave = true;
          break;
        default:
          break;
      }
    });
  });
  this.GetAllEstatePropertyType();
}
GetAllEstatePropertyType() {
   this.srv.GetAllEstatePropertyType().subscribe (res => {
    this.RowData = res;
  });
 }
closeModal() {
  this.router.navigate([{ outlets: { primary: 'Home', PopUp: null } }]);
}
popupclosed() {
  this.btnclicked = false;
}
RowClick(InputValue) {
  this.selectedRow = InputValue;
 }
onSave() {
  this.gridApi.stopEditing();
  this.Dto = [];
  this.RowData = [];
  this.gridApi.forEachNode(res => {
    this.RowData.push(res.data);
  });
  this.RowData.forEach(res => {
    const EstatePropertyType = {
      EstatePropertyTypeCode : res.EstatePropertyTypeCode,
      EstatePropertyTypeName : res.EstatePropertyTypeName,
         };
        this.Dto.push(EstatePropertyType);
  });
    this.srv.SaveEstatePropertyType(this.Dto).subscribe(res => {
    this.btnclicked = true;
    this.type = 'message-box';
    this.HaveHeader = true;
    this.alertMessageParams.message = 'ثبت با موفقیت انجام شد';
    this.srv.GetAllEstatePropertyType().subscribe((res2: any) => {
      this.RowData = [];
      this.RowData = res2;
  });
  },
  err => {
    if (!err.error.Message.includes('|')) {
      this.ShowMessageBoxWithOkBtn('خطای پیش بینی نشده');
    }
  });
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
}
