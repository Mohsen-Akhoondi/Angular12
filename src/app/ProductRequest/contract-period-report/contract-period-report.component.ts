import { NgSelectConfig } from 'src/app/Shared/ng-select/public-api';
import { WorkflowService } from 'src/app/Services/WorkFlowService/WorkflowServices';
import { RegionListService } from 'src/app/Services/BaseService/RegionListService';
import { ModuleService } from 'src/app/Services/BaseService/ModuleService';
import { GridOptions } from 'ag-grid-community';
import { of, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Input, Component, OnInit } from '@angular/core';
import { ContractListService } from 'src/app/Services/BaseService/ContractListService';
import { RefreshServices } from 'src/app/Services/BaseService/RefreshServices';
import { resolve } from 'url';
import { reject } from 'q';
import { ProductRequestService } from 'src/app/Services/ProductRequest/ProductRequestService';
import { ReportService } from 'src/app/Services/ReportService/ReportService';

@Component({
  selector: 'app-contract-period-report',
  templateUrl: './contract-period-report.component.html',
  styleUrls: ['./contract-period-report.component.css']
})
export class ContractPeriodReportComponent implements OnInit {
  NgSelectRegionParams = { // ok
    Items: [],
    bindLabelProp: 'RegionGroupName',
    bindValueProp: 'RegionGroupCode',
    placeholder: '',
    MinWidth: '150px',
    selectedObject: null,
    loading: false,
    IsVirtualScroll: false,
    Required: true,
    clearable: false,
    IsDisabled: false,
  }
  ReigonListSet = [];

  FromContractDate: any;
  ToContractDate: any;
  FromProductRequestDate: any;
  ToProductRequestDate: any;

  btnclicked;
  type;
  startLeftPosition;
  startTopPosition;
  HaveHeader: boolean;
  alertMessageParams = { HaveOkBtn: true, message: '' };
  columnDef;
  rowData = [];
  NgSelectTimesParams = {
    Items: [],
    bindLabelProp: 'NoTimesName',
    bindValueProp: 'NoTimesCode',
    placeholder: '',
    MinWidth: '150px',
    selectedObject: null,
    loading: false,
    IsVirtualScroll: false,
    Required: false,
    clearable: true,
    IsDisabled: false,
  };
  TimesListSet = [];
  constructor(private router: Router,
    private ProductRequest: ProductRequestService,
    private RegionGroup: RegionListService,
    private Report: ReportService,
  ) {
    this.TimesListSet = [{ NoTimesName: '?????????? ????????', NoTimesCode: 0 }, { NoTimesName: '1', NoTimesCode: 1 },
    { NoTimesName: '2', NoTimesCode: 2 }, { NoTimesName: '3', NoTimesCode: 3 }];
    this.columnDef = [];

  }

  ngOnInit() {
    this.getNewData();
    this.ColumnsDefinition();
  }
  getNewData(): void {
    this.RegionGroup.GetRegionGroupList().subscribe(res => {
      this.ReigonListSet = res;

    });
  }

  onChangeReigonObj(newObj) { // ok

  }

  popupclosed() {
    this.btnclicked = false;
  }

  ShowMessageBoxWithOkBtn(message) {
    this.btnclicked = true;
    this.type = 'message-box';
    this.HaveHeader = true;
    this.startLeftPosition = 486;
    this.startTopPosition = 211;
    this.alertMessageParams.message = message;
    this.alertMessageParams.HaveOkBtn = true;
  }

  closeModal() {
    this.router.navigate([{ outlets: { primary: 'Home', PopUp: null } }]);
  }


  OnFromContractDateChange(ADate) {
    this.FromContractDate = ADate.MDate;
  }

  OnToContractDateChange(ADate) {
    this.ToContractDate = ADate.MDate;
  }

  OnFromProductRequestDateChange(ADate) {
    this.FromProductRequestDate = ADate.MDate;
  }
  OnToProductRequestDateChange(ADate) {
    this.ToProductRequestDate = ADate.MDate;
  }

  onPrint(Type) {
    if (this.NgSelectRegionParams.selectedObject === null) {
      this.ShowMessageBoxWithOkBtn('???????? ???????????? ???????????? ???????? ??????');
    } else {
      let StrType = '?????????? ?????????????? ???????? ?????????????? ???? ??????';

      if (Type === 'Totaly') {
        StrType = '?????????? ?????????????? ???????? ?????????????? ???? ??????????';
      }
      if (Type === 'Average') {
        StrType = '?????????? ?????????????? ???????? ???????????? ???? ???? ??????????';
      }
      this.Report.ContractPeriodReport(
        this.NgSelectRegionParams.selectedObject,
        this.FromProductRequestDate,
        this.ToProductRequestDate,
        this.FromContractDate,
        this.ToContractDate,
        this.NgSelectTimesParams.selectedObject,
        2864,
        0,
        StrType);
    }
  }
  ColumnsDefinition(type = 'Totaly') {
    if (type === 'Detail') {
      this.columnDef = [
        {
          headerName: '???????? ',
          field: 'ItemNo',
          width: 80,
          resizable: true
        },
        {
          headerName: '???????? ????????????',
          field: 'RegionName',
          width: 180,
          resizable: true
        },
        {
          headerName: '?????????? ??????????????',
          field: 'LetterNo',
          width: 150,
          resizable: true
        },
        {
          headerName: '?????????? ??????????????',
          field: 'ProductRequestNo',
          width: 150,
          resizable: true
        },
        {
          headerName: '?????????? ???????? ??????????????', // RFC 51776
          field: 'PersianMinDate',
          width: 130,
          resizable: true
        },
        {
          headerName: '?????????? ?????????? ??????????????', // RFC 51776
          field: 'PersianMaxDate',
          width: 130,
          resizable: true
        },
        {
          headerName: '?????????? ???????????? ??????????????', // RFC 51776
          field: 'PersianLetterDate',
          width: 130,
          resizable: true
        },
        {
          headerName: '?????? ????????',
          field: 'TotalDay',
          width: 100,
          resizable: true
        },
      ];
    } else if (type === 'Totaly') {
      this.columnDef = [
        {
          headerName: '???????? ',
          field: 'ItemNo',
          width: 80,
          resizable: true
        },
        {
          headerName: '???????? ????????????',
          field: 'RegionName',
          width: 300,
          resizable: true
        },
        {
          headerName: '??????????',
          field: 'Count',
          width: 100,
          resizable: true
        },
        {
          headerName: '?????????????? ????????  (??????)',
          field: 'Avrage',
          width: 130,
          resizable: true,
        },
      ];
    } else {
      this.columnDef = [
        {
          headerName: '???????? ',
          field: 'ItemNo',
          width: 80,
          resizable: true
        },
        {
          headerName: '???????? ????????????',
          field: 'RegionName',
          width: 180,
          resizable: true
        },
        {
          headerName: '???????? ??????????',
          field: 'CostCenterName',
          width: 150,
          resizable: true
        },
        {
          headerName: '?????? ???????? ??????',
          field: 'WorkflowNodeName',
          width: 150,
          resizable: true
        },
        {
          headerName: '?????????? ????',
          field: 'TotalCount',
          width: 130,
          resizable: true
        },
        {
          headerName: '???? ???????????? ????????????',
          field: 'TotalWatingDay',
          width: 130,
          resizable: true
        },
        {
          headerName: '?????????????? ?????? ????????????',
          field: 'AvrageWaitingDay',
          width: 130,
          resizable: true
        },
        {
          headerName: '?????????????? ???????? ????????????',
          field: 'AvrageWaitingHour',
          width: 130,
          resizable: true
        },
        {
          headerName: '?????????????? ?????????? ????????????',
          field: 'AvrageWaitingMinute',
          width: 100,
          resizable: true
        },
        {
          headerName: '?????????????? ?????????? ????????????',
          field: 'AvrageWaitingSecond',
          width: 100,
          resizable: true
        },
      ];
    }
  }
  TotalySearch() {
    if (this.NgSelectRegionParams.selectedObject === null) {
      this.ShowMessageBoxWithOkBtn('???????? ???????????? ???????????? ???????? ??????');
      return;
    }
    this.ProductRequest.GetContractPeriodTotaly(
      this.NgSelectRegionParams.selectedObject,
      this.FromProductRequestDate,
      this.ToProductRequestDate,
      this.FromContractDate,
      this.ToContractDate,
      this.NgSelectTimesParams.selectedObject).subscribe(res => {
        res.forEach(element => {
          element.Avrage = parseFloat(element.Avrage).toFixed(2);
        });
        this.rowData = res;

      });

    this.ColumnsDefinition('Totaly');
  }
  DetailSearch() {
    if (this.NgSelectRegionParams.selectedObject === null) {
      this.ShowMessageBoxWithOkBtn('???????? ???????????? ???????????? ???????? ??????');
      return;
    }
    this.ProductRequest.GetContractPeriodDetail(
      this.NgSelectRegionParams.selectedObject,
      this.FromProductRequestDate,
      this.ToProductRequestDate,
      this.FromContractDate,
      this.ToContractDate,
      this.NgSelectTimesParams.selectedObject).subscribe(res => {
        res.forEach(element => {
          element.TotalDay = parseFloat(element.TotalDay).toFixed(2);
        });
        this.rowData = res;
      });

    this.ColumnsDefinition('Detail');
  }
  WFAverageSearch() {
    if (this.NgSelectRegionParams.selectedObject === null) {
      this.ShowMessageBoxWithOkBtn('???????? ???????????? ???????????? ???????? ??????');
      return;
    }
    this.ProductRequest.GetContractWorkFlowAverageWaiting(
      this.NgSelectRegionParams.selectedObject,
      this.FromContractDate,
      this.ToContractDate,
      this.FromProductRequestDate,
      this.ToProductRequestDate,
      this.NgSelectTimesParams.selectedObject
       ).subscribe(res => {
        // res.forEach(element => {
        //   element.TotalDay = parseFloat(element.TotalDay).toFixed(2);
        // });
        this.rowData = res;
      });

    this.ColumnsDefinition('WFA');
  }
  onChangeTimesObj(event) { }
}
