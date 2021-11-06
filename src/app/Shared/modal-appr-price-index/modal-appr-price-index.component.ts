import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PriceListTopicService } from 'src/app/Services/BaseService/PriceListTopicService';
import { NgSelectConfig } from '../ng-select';
import { PriceListService } from 'src/app/Services/BaseService/PriceListService';
import { NgSelectCellEditorComponent } from 'src/app/Shared/NgSelectCellEditor/ng-select-cell-editor.component';
import { RefreshServices } from 'src/app/Services/BaseService/RefreshServices';
import { NgSelectVirtualScrollComponent } from 'src/app/Shared/ng-select-virtual-scroll/ng-select-virtual-scroll.component';
import { ReportService } from 'src/app/Services/ReportService/ReportService';
import { CheckboxFieldEditableComponent } from '../checkbox-field-editable/checkbox-field-editable.component';
import { TemplateRendererComponent } from '../grid-component/template-renderer/template-renderer.component';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-modal-appr-price-index',
  templateUrl: './modal-appr-price-index.component.html',
  styleUrls: ['./modal-appr-price-index.component.css']
})
export class ModalApprPriceIndexComponent implements OnInit {
  @ViewChild('IsDefinite') IsDefinite: TemplateRef<any>;
  startTopPosition = 215;
  alertMessageParams = { HaveOkBtn: true, message: '' };
  HaveMaxBtn = false;
  startLeftPosition;
  HaveHeader;
  type;
  isClicked = false;
  rowData;
  IsEditable = true;
  rowDataYears: any[];
  IndicatorData: any[] = [
    {
      IndicatorName: 'رشته ای',
      IndicatorValue: 4
    },
    {
      IndicatorName: 'فصل',
      IndicatorValue: 5
    },
    {
      IndicatorName: 'ردیف',
      IndicatorValue: 6
    }];
  AttachmentData: any[] = [
    {
      AttachmentName: 'پیوست دو',
      AttachmentValue: 2
    },
    {
      AttachmentName: 'پیوست سه',
      AttachmentValue: 3
    }];
  columnDefs: any;
  gridApi: any;
  gridColumnApi: any;
  defaultColDef: any;
  selectedYear = 1397;
  selectedAttachmentNo = 2;
  selectedLevelCode = 4;
  RastehParams = {
    Items: [],
    bindLabelProp: 'RastehTitle',
    bindValueProp: 'Level1Code',
    placeholder: '',
    MinWidth: '150px',
    selectedObject: null,
    loading: false,
    IsVirtualScroll: false,
    IsDisabled: false,
    clearable: false,
    type: 'Reshteh'
  };
  ReshtehParams = {
    bindLabelProp: 'ReshtehTitle',
    bindValueProp: 'PriceListPattern2ID',
    placeholder: '',
    MinWidth: '150px',
    selectedObject: null,
    loading: false,
    IsVirtualScroll: false,
    IsDisabled: false,
    clearable: false,
    type: 'Reshteh'
  };
  FaslParams = {
    bindLabelProp: 'FaslTitle',
    bindValueProp: 'PriceListPatternID',
    placeholder: '',
    MinWidth: '150px',
    selectedObject: null,
    loading: false,
    IsVirtualScroll: false,
    IsDisabled: false,
    clearable: false,
    type: 'Fasl'
  };
  RadifParams = {
    bindLabelProp: 'RadifTitle',
    bindValueProp: 'PriceListPattern3ID',
    placeholder: '',
    MinWidth: '150px',
    selectedObject: null,
    loading: false,
    IsVirtualScroll: false,
    IsDisabled: false,
    clearable: false,
    type: 'Radif'
  };
  Reshteh2Params = {
    bindLabelProp: 'ReshtehTitle',
    bindValueProp: 'Level2Code',
    placeholder: '',
    MinWidth: '150px',
    selectedObject: null,
    loading: false,
    IsVirtualScroll: false,
    IsDisabled: false,
    clearable: false,
    type: 'Reshteh'
  };
  Fasl2Params = {
    bindLabelProp: 'FaslTitle',
    bindValueProp: 'Level3Code',
    placeholder: '',
    MinWidth: '150px',
    selectedObject: null,
    loading: false,
    IsVirtualScroll: false,
    IsDisabled: false,
    clearable: false,
    type: 'Fasl'
  };

  constructor(
    private router: Router,
    private PriceListTopic: PriceListTopicService,
    private PriceList: PriceListService,
    private RefreshPersonItems: RefreshServices,
    config: NgSelectConfig,
    private Report: ReportService,
  ) {
    config.notFoundText = 'موردی یافت نشد';

  }
   // tslint:disable-next-line:use-life-cycle-interface
   ngAfterViewInit(): void {
     this.DefColumns(this.selectedLevelCode);
    this.defaultColDef = { resizable: true };

   }
  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  closeModal() {
    $('.modal').fadeOut(300);
    this.router.navigate([{ outlets: { primary: 'Home', PopUp: null } }]);
  }
  ngOnInit() {
    this.PriceList.GetPriceListTopics(true).subscribe(res => {
      this.rowDataYears = res;
      for (const i of res) {
        i.PriceListTopicCodeName = i.PriceListTopicCode + ' - ' + i.PriceListTopicName;
      }
      this.selectedYear = res[0].PriceListTopicCode;
      this.onLoadGrid();
    });
  }

  onChangeYear(year: number) {
    this.onLoadGrid();
  }

  onChangeAttachment(attachmentNo: number) {
    this.onLoadGrid();
  }

  onChangeLevelCode(levelCode: number) {
    this.DefColumns(this.selectedLevelCode);
    this.onChangeLevelCodeCahngeValue();
    this.onLoadGrid();
  }

  onLoadGrid() {
    this.rowData = this.PriceListTopic.GetApprovalPriceIndexList(
      this.selectedYear,
      this.selectedAttachmentNo,
      this.selectedLevelCode
    );
  }

  onShowReport() {
    this.Report.ShowapprpriceindexReport(
      this.selectedYear,
      this.selectedAttachmentNo,
      this.selectedLevelCode
    );
  }

  onGridReady(event) {
    this.gridApi = event.api;
  }

  onSave() {
    this.gridApi.stopEditing();
    const GridData = [];
    this.gridApi.forEachNode(res => {
      GridData.push(res.data);
    });
    this.PriceListTopic.UpdatePriceList(
      GridData,
      this.selectedYear,
      this.selectedAttachmentNo,
      this.selectedLevelCode).subscribe(ress => {
        this.ShowMessageBoxWithOkBtn('ثبت با موفقیت انجام شد');
      });
  }
  oncellEditingStarted(event) {
    if (event.colDef && event.colDef.field === 'ReshtehTitle') {
      this.columnDefs[2].cellEditorParams.Params.loading = true;
      this.PriceListTopic.GetPriceListPatternReshteh(event.data.Level1Code, this.selectedYear, this.selectedLevelCode).subscribe(ress => {
        this.RefreshPersonItems.RefreshItemsVirtualNgSelect({
          List: ress,
          type: 'Reshteh'
        });
      });
      this.columnDefs[2].cellEditorParams.Params.loading = false;
    } else if (event.colDef && event.colDef.field === 'FaslTitle') {
      if (this.selectedLevelCode !== 4) {
        this.columnDefs[3].cellEditorParams.Params.loading = true;
        this.PriceListTopic.GetPriceListPatternFasl(event.data.Level1Code, event.data.Level2Code,
                                                    this.selectedYear, this.selectedLevelCode).subscribe(ress => {
          this.RefreshPersonItems.RefreshItemsVirtualNgSelect({
            List: ress,
            type: 'Fasl'
          });
        });
        this.columnDefs[3].cellEditorParams.Params.loading = false;
      }
    } else if (event.colDef && event.colDef.field === 'RadifTitle') {
      if (this.selectedLevelCode === 6) {
        this.columnDefs[4].cellEditorParams.Params.loading = true;
        this.PriceListTopic.GetPriceListPatternRadif(event.data.Level1Code, event.data.Level2Code, event.data.Level3Code,
                                                     this.selectedYear, this.selectedLevelCode).subscribe(ress => {
          this.RefreshPersonItems.RefreshItemsVirtualNgSelect({
            List: ress,
            type: 'Radif'
          });
        });
        this.columnDefs[4].cellEditorParams.Params.loading = false;
      }
    }
  }
  onChangeLevelCodeCahngeValue() {
  }

  ShowMessageBoxWithOkBtn(message) {
    this.isClicked = true;
    this.type = 'message-box';
    this.HaveHeader = true;
    this.startLeftPosition = 530;
    this.startTopPosition = 215;
    this.alertMessageParams.message = message;
    this.alertMessageParams.HaveOkBtn = true;
    this.HaveMaxBtn = false;
  }

  popupclosed() {
    this.HaveMaxBtn = false;
    this.isClicked = false;
  }

  DefColumns(selectedLevelCode) {
    switch (selectedLevelCode) {
      case 4: // رشته
        this.columnDefs = [
          {
            headerName: 'ردیف',
            field: 'ItemNo',
            width: 70,
            resizable: true
          },
          {
            headerName: 'رسته',
            field: 'RastehTitle',
            width: 180,
            editable: true,
            resizable: true,
            cellEditorFramework: NgSelectCellEditorComponent,
            cellEditorParams: {
              Items: this.PriceListTopic.GetPriceListPatternRasteh(this.selectedLevelCode, this.selectedYear),
              bindLabelProp: 'RastehTitle',
              bindValueProp: 'Level1Code'
            },
            cellRenderer: 'SeRender',
            valueFormatter: function currencyFormatter(params) {
              if (params.value) {
                return params.value.RastehTitle;
              } else {
                return '';
              }
            },
            valueSetter: (params) => {
              if (params.newValue) {
                params.data.RastehTitle = params.newValue.RastehTitle;
                params.data.Level1Code = params.newValue.Level1Code;
                params.data.ReshtehTitle = null;
                params.data.Level2Code = null;
                params.data.FaslTitle = null;
                params.data.PriceListPatternID = null;
                params.data.PriceListPattern2ID = null;
                params.data.Level3Code = null;
                params.data.Level4Code = null;
                params.data.PriceListPattern3ID = null;
                params.data.RadifTitle = null;
              } else {
                params.data.RastehTitle = null;
                params.data.Level1Code = null;
                params.data.ReshtehTitle = null;
                params.data.Level2Code = null;
                params.data.FaslTitle = null;
                params.data.PriceListPatternID = null;
                params.data.PriceListPattern2ID = null;
                params.data.Level3Code = null;
                params.data.Level4Code = null;
                params.data.PriceListPattern3ID = null;
                params.data.RadifTitle = null;
              }
            },
          },
          {
            headerName: 'رشته',
            field: 'ReshtehTitle',
            width: 180,
            editable: true,
            resizable: true,
            cellEditorFramework: NgSelectVirtualScrollComponent,
            cellEditorParams: {
              Params: this.ReshtehParams,
              Items: [],
              Owner: this
            },
            cellRenderer: 'SeRender',
            valueFormatter: function currencyFormatter(params) {
              if (params.value) {
                return params.value.ReshtehTitle;
              } else {
                return '';
              }
            },
            valueSetter: (params) => {
              if (params.newValue && params.newValue.ReshtehTitle) {
                params.data.ReshtehTitle = params.newValue.ReshtehTitle;
                params.data.PriceListPattern2ID = params.newValue.PriceListPattern2ID;
                params.data.FaslTitle = null;
                params.data.PriceListPatternID = null;
                params.data.Level3Code = null;
                params.data.Level4Code = null;
                params.data.PriceListPattern3ID = null;
                params.data.RadifTitle = null;
              } else {
                params.data.ReshtehTitle = null;
                params.data.FaslTitle = null;
                params.data.PriceListPatternID = null;
                params.data.PriceListPattern2ID = null;
                params.data.Level3Code = null;
                params.data.Level4Code = null;
                params.data.PriceListPattern3ID = null;
                params.data.RadifTitle = null;
              }
            },
          },
          {
            headerName: 'دوره',
            field: 'DurationNo',
            width: 100,
            editable: true,
            resizable: true,
          },
          {
            headerName: 'شاخص ابلاغی',
            field: 'IndexValue',
            width: 130,
            editable: true
          },
          {
            headerName: 'قطعی' ,
            field: 'IsDefinite',
            width: 100,
            resizable: true,
            editable: true,
            cellEditorFramework: CheckboxFieldEditableComponent,
            valueFormatter: function isValidFormer(params) {
              if (params.value) {
                return 'معتبر';
              } else {
                return 'نامعتبر';
              }
            },
            cellRendererFramework: TemplateRendererComponent,
            cellRendererParams: {
              ngTemplate: this.IsDefinite
            },
          },
          {
            headerName: 'شاخص راه',
            field: 'RoadIndexValue',
            width: 130,
            editable: true
          },
          {
            headerName: 'شاخص آب',
            field: 'WaterIndexValue',
            width: 130,
            editable: true
          },
        ];
        break;
      case 5: // فصل
        this.columnDefs = [
          {
            headerName: 'ردیف',
            field: 'ItemNo',
            width: 70,
            resizable: true
          },
          {
            headerName: 'رسته',
            field: 'RastehTitle',
            width: 180,
            editable: true,
            resizable: true,
            cellEditorFramework: NgSelectCellEditorComponent,
            cellEditorParams: {
              Items: this.PriceListTopic.GetPriceListPatternRasteh(this.selectedLevelCode, this.selectedYear),
              bindLabelProp: 'RastehTitle',
              bindValueProp: 'Level1Code'
            },
            cellRenderer: 'SeRender',
            valueFormatter: function currencyFormatter(params) {
              if (params.value) {
                return params.value.RastehTitle;
              } else {
                return '';
              }
            },
            valueSetter: (params) => {
              if (params.newValue) {
                params.data.RastehTitle = params.newValue.RastehTitle;
                params.data.Level1Code = params.newValue.Level1Code;
                params.data.ReshtehTitle = null;
                params.data.Level2Code = null;
                params.data.FaslTitle = null;
                params.data.PriceListPatternID = null;
                params.data.Level3Code = null;
                params.data.Level4Code = null;
                params.data.PriceListPattern3ID = null;
                params.data.RadifTitle = null;
              } else {
                params.data.RastehTitle = null;
                params.data.Level1Code = null;
                params.data.ReshtehTitle = null;
                params.data.Level2Code = null;
                params.data.FaslTitle = null;
                params.data.PriceListPatternID = null;
                params.data.PriceListPattern2ID = null;
                params.data.Level3Code = null;
                params.data.Level4Code = null;
                params.data.PriceListPattern3ID = null;
                params.data.RadifTitle = null;
              }
            },
          },
          {
            headerName: 'رشته',
            field: 'ReshtehTitle',
            width: 180,
            editable: true,
            resizable: true,
            cellEditorFramework: NgSelectVirtualScrollComponent,
            cellEditorParams: {
              Params: this.Reshteh2Params,
              Items: [],
              Owner: this
            },
            cellRenderer: 'SeRender',
            valueFormatter: function currencyFormatter(params) {
              if (params.value) {
                return params.value.ReshtehTitle;
              } else {
                return '';
              }
            },
            valueSetter: (params) => {
              if (params.newValue && params.newValue.ReshtehTitle) {
                params.data.ReshtehTitle = params.newValue.ReshtehTitle;
                params.data.Level2Code = params.newValue.Level2Code;
                params.data.PriceListPattern2ID = params.newValue.PriceListPattern2ID;
                params.data.FaslTitle = null;
                params.data.PriceListPatternID = null;
                params.data.Level3Code = null;
                params.data.Level4Code = null;
                params.data.PriceListPattern3ID = null;
                params.data.RadifTitle = null;
              } else {
                params.data.ReshtehTitle = null;
                params.data.Level2Code = null;
                params.data.FaslTitle = null;
                params.data.PriceListPatternID = null;
                params.data.PriceListPattern2ID = null;
                params.data.Level3Code = null;
                params.data.Level4Code = null;
                params.data.PriceListPattern3ID = null;
                params.data.RadifTitle = null;
              }
            },
          },
          {
            headerName: 'فصل',
            field: 'FaslTitle',
            width: 250,
            editable: true,
            resizable: true,
            cellEditorFramework: NgSelectVirtualScrollComponent,
            cellEditorParams: {
              Params: this.FaslParams,
              Items: [],
              Owner: this
            },
            cellRenderer: 'SeRender',
            valueFormatter: function currencyFormatter(params) {
              if (params.value) {
                return params.value.FaslTitle;
              } else {
                return '';
              }
            },
            valueSetter: (params) => {
              if (params.newValue) {
                params.data.FaslTitle = params.newValue.FaslTitle;
                params.data.PriceListPatternID = params.newValue.PriceListPatternID;
                params.data.Level4Code = null;
                params.data.PriceListPattern3ID = null;
                params.data.RadifTitle = null;
              } else {
                params.data.FaslTitle = null;
                params.data.PriceListPatternID = null;
                params.data.Level4Code = null;
                params.data.PriceListPattern3ID = null;
                params.data.RadifTitle = null;
              }
            },
          },
          {
            headerName: 'دوره',
            field: 'DurationNo',
            width: 100,
            editable: true,
            resizable: true,
          },
          {
            headerName: 'شاخص ابلاغی',
            field: 'IndexValue',
            width: 130,
            editable: true
          },
          {
            headerName: 'قطعی' ,
            field: 'IsDefinite',
            width: 100,
            resizable: true,
            editable: true,
            cellEditorFramework: CheckboxFieldEditableComponent,
            valueFormatter: function isValidFormer(params) {
              if (params.value) {
                return 'معتبر';
              } else {
                return 'نامعتبر';
              }
            },
            cellRendererFramework: TemplateRendererComponent,
            cellRendererParams: {
              ngTemplate: this.IsDefinite
            },
          },
          {
            headerName: 'شاخص راه',
            field: 'RoadIndexValue',
            width: 130,
            editable: true
          },
          {
            headerName: 'شاخص آب',
            field: 'WaterIndexValue',
            width: 130,
            editable: true
          },
        ];
        break;
      case 6: // ردیف
        this.columnDefs = [
          {
            headerName: 'ردیف',
            field: 'ItemNo',
            width: 70,
            resizable: true
          },
          {
            headerName: 'رسته',
            field: 'RastehTitle',
            width: 180,
            editable: true,
            resizable: true,
            cellEditorFramework: NgSelectCellEditorComponent,
            cellEditorParams: {
              Items: this.PriceListTopic.GetPriceListPatternRasteh(this.selectedLevelCode, this.selectedYear),
              bindLabelProp: 'RastehTitle',
              bindValueProp: 'Level1Code'
            },
            cellRenderer: 'SeRender',
            valueFormatter: function currencyFormatter(params) {
              if (params.value) {
                return params.value.RastehTitle;
              } else {
                return '';
              }
            },
            valueSetter: (params) => {
              if (params.newValue) {
                params.data.RastehTitle = params.newValue.RastehTitle;
                params.data.Level1Code = params.newValue.Level1Code;
                params.data.ReshtehTitle = null;
                params.data.Level2Code = null;
                params.data.FaslTitle = null;
                params.data.PriceListPatternID = null;
                params.data.PriceListPattern2ID = null;
                params.data.Level3Code = null;
                params.data.Level4Code = null;
                params.data.PriceListPattern3ID = null;
                params.data.RadifTitle = null;
              } else {
                params.data.RastehTitle = null;
                params.data.Level1Code = null;
                params.data.ReshtehTitle = null;
                params.data.Level2Code = null;
                params.data.FaslTitle = null;
                params.data.PriceListPatternID = null;
                params.data.PriceListPattern2ID = null;
                params.data.Level3Code = null;
                params.data.Level4Code = null;
                params.data.PriceListPattern3ID = null;
                params.data.RadifTitle = null;
              }
            },
          },
          {
            headerName: 'رشته',
            field: 'ReshtehTitle',
            width: 180,
            editable: true,
            resizable: true,
            cellEditorFramework: NgSelectVirtualScrollComponent,
            cellEditorParams: {
              Params: this.Reshteh2Params,
              Items: [],
              Owner: this
            },
            cellRenderer: 'SeRender',
            valueFormatter: function currencyFormatter(params) {
              if (params.value) {
                return params.value.ReshtehTitle;
              } else {
                return '';
              }
            },
            valueSetter: (params) => {
              if (params.newValue && params.newValue.ReshtehTitle) {
                params.data.ReshtehTitle = params.newValue.ReshtehTitle;
                params.data.Level2Code = params.newValue.Level2Code;
                params.data.FaslTitle = null;
                params.data.PriceListPatternID = null;
                params.data.Level3Code = null;
                params.data.Level4Code = null;
                params.data.PriceListPattern3ID = null;
                params.data.RadifTitle = null;
              } else {
                params.data.ReshtehTitle = null;
                params.data.Level2Code = null;
                params.data.FaslTitle = null;
                params.data.PriceListPatternID = null;
                params.data.Level3Code = null;
                params.data.Level4Code = null;
                params.data.PriceListPattern3ID = null;
                params.data.RadifTitle = null;
              }
            },
          },
          {
            headerName: 'فصل',
            field: 'FaslTitle',
            width: 250,
            editable: true,
            resizable: true,
            cellEditorFramework: NgSelectVirtualScrollComponent,
            cellEditorParams: {
              Params: this.Fasl2Params,
              Items: [],
              Owner: this
            },
            cellRenderer: 'SeRender',
            valueFormatter: function currencyFormatter(params) {
              if (params.value) {
                return params.value.FaslTitle;
              } else {
                return '';
              }
            },
            valueSetter: (params) => {
              if (params.newValue) {
                params.data.FaslTitle = params.newValue.FaslTitle;
                params.data.Level3Code = params.newValue.Level3Code;
                params.data.Level4Code = null;
                params.data.PriceListPattern3ID = null;
                params.data.RadifTitle = null;
              } else {
                params.data.FaslTitle = null;
                params.data.Level3Code = null;
                params.data.Level4Code = null;
                params.data.PriceListPattern3ID = null;
                params.data.RadifTitle = null;
              }
            },
          },
          {
            headerName: 'ردیف',
            field: 'RadifTitle',
            width: 250,
            editable: true,
            resizable: true,
            cellEditorFramework: NgSelectVirtualScrollComponent,
            cellEditorParams: {
              Params: this.RadifParams,
              Items: [],
              Owner: this
            },
            cellRenderer: 'SeRender',
            valueFormatter: function currencyFormatter(params) {
              if (params.value) {
                return params.value.RadifTitle;
              } else {
                return '';
              }
            },
            valueSetter: (params) => {
              if (params.newValue) {
                params.data.Level4Code = params.newValue.Level4Code;
                params.data.PriceListPattern3ID = params.newValue.PriceListPattern3ID;
                params.data.RadifTitle = params.newValue.RadifTitle;
              } else {
                params.data.Level4Code = null;
                params.data.PriceListPattern3ID = null;
                params.data.RadifTitle = null;
              }
            },
          },
          {
            headerName: 'دوره',
            field: 'DurationNo',
            width: 100,
            editable: true,
            resizable: true,
          },
          {
            headerName: 'شاخص ابلاغی',
            field: 'IndexValue',
            width: 130,
            editable: true
          },
          {
            headerName: 'قطعی' ,
            field: 'IsDefinite',
            width: 100,
            resizable: true,
            editable: true,
            cellEditorFramework: CheckboxFieldEditableComponent,
            valueFormatter: function isValidFormer(params) {
              if (params.value) {
                return 'معتبر';
              } else {
                return 'نامعتبر';
              }
            },
            cellRendererFramework: TemplateRendererComponent,
            cellRendererParams: {
              ngTemplate: this.IsDefinite
            },
          },
          {
            headerName: 'شاخص راه',
            field: 'RoadIndexValue',
            width: 130,
            editable: true
          },
          {
            headerName: 'شاخص آب',
            field: 'WaterIndexValue',
            width: 130,
            editable: true
          },
        ];
        break;
      default:
        break;
    }
  }
}
