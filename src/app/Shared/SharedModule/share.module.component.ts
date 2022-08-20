import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from '../grid-component/grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectVirtualScrollComponent } from '../ng-select-virtual-scroll/ng-select-virtual-scroll.component';
import { NgSelectModule } from '../ng-select';
import { FormsModule } from '@angular/forms';
import { JalaliDatepickerComponent } from '../jalali-datepicker/jalali-datepicker.component';
import { DpDatePickerModule } from '../jalali-angular-datepicker';
import { NumberInputComponentComponent } from '../CustomComponent/InputComponent/number-input-component/number-input-component.component';
import { CustomizedTreeComponent } from '../customized-tree/customized-tree.component';
import { MyTreeComponent } from '../tree-component/tree.component';
import { TreeModule } from 'angular-tree-component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { Tree2Component } from '../../Advertising/tree2/tree2.component';
import { FileViwerPageComponent } from '../file-viwer-page/file-viwer-page.component';
import { ImageViewerModule } from 'ng2-image-viewer';
import { MessageBoxComponent } from '../message-box/message-box.component';
import { SharedOverPopupComponent } from '../shared-over-popup/shared-over-popup.component';
import { UsersOrganizationSignComponent } from '../../AppUser/users-organization-sign/users-organization-sign.component';
import { PDFViewerComponent } from '../pdfviewer/pdfviewer.component';
import { ModalArchiveComponent } from '../modal-archive/modal-archive.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CustomCheckboxModule } from '../custom-checkbox/src/public_api';
import { CustomCheckBoxComponent } from '../CustomComponent/custom-check-box/custom-check-box.component';
import { UserWorkLogDetailGraphLineComponent } from '../../WorkFlow/user-work-log-detail-graph-line/user-work-log-detail-graph-line.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { UserWorkLogDetailGraphComponent } from '../../WorkFlow/user-work-log-detail-graph/user-work-log-detail-graph.component';
import { UserWorkLogDetailComponent } from '../../WorkFlow/user-work-log-detail/user-work-log-detail.component';
import { WorkFlowTransitionComponent } from '../../WorkFlow/work-flow-transition/work-flow-transition.component';
import { ExcelLoadDataComponent } from '../excel-load-data/excel-load-data.component';
import { NgGraphComponent } from '../ng-graph/ng-graph.component';
import { RadioBoxComponentComponent } from '../Radio-Box/Radio-Box-Component/radio-box-component.component';
@NgModule({
  declarations: [
    GridComponent,
    NgSelectVirtualScrollComponent,
    JalaliDatepickerComponent,
    NumberInputComponentComponent,
    CustomizedTreeComponent,
    MyTreeComponent,
    Tree2Component,
    FileViwerPageComponent,
    MessageBoxComponent,
    SharedOverPopupComponent,
    UsersOrganizationSignComponent,
    PDFViewerComponent,
    ModalArchiveComponent,
    CustomCheckBoxComponent,
    UserWorkLogDetailGraphLineComponent,
    UserWorkLogDetailGraphComponent,
    UserWorkLogDetailComponent,
    WorkFlowTransitionComponent,
    ExcelLoadDataComponent,
    NgGraphComponent,
    RadioBoxComponentComponent,
  ],
  exports: [
    GridComponent,
    NgSelectVirtualScrollComponent,
    JalaliDatepickerComponent,
    NumberInputComponentComponent,
    CustomizedTreeComponent,
    MyTreeComponent,
    Tree2Component,
    FileViwerPageComponent,
    MessageBoxComponent,
    SharedOverPopupComponent,
    UsersOrganizationSignComponent,
    PDFViewerComponent,
    ModalArchiveComponent,
    CustomCheckBoxComponent,
    UserWorkLogDetailGraphLineComponent,
    UserWorkLogDetailGraphComponent,
    UserWorkLogDetailComponent,
    WorkFlowTransitionComponent,
    ExcelLoadDataComponent,
    NgGraphComponent,
    RadioBoxComponentComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AgGridModule.withComponents([]),
    NgSelectModule,
    FormsModule,
    DpDatePickerModule,
    TreeModule.forRoot(),
    MalihuScrollbarModule.forRoot(),
    ImageViewerModule,
    NgxExtendedPdfViewerModule,
    CustomCheckboxModule,
    NgxGraphModule
  ],
  entryComponents: [
    NgSelectVirtualScrollComponent,
    JalaliDatepickerComponent,
    NumberInputComponentComponent,
  ],
  providers: [
    JalaliDatepickerComponent
  ]
})
export class ShareModule { }
