import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserDetailComponent } from './Users/user-detail.component';
import { ImageViewerModule } from 'ng2-image-viewer-forked';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TreeModule } from '@circlon/angular-tree-component';
import { NumberInputComponentComponent } from './number-input-component/number-input-component.component';
import { GridComponent } from './grid-component/grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { LoadingService } from './Load/loading/LoadingService';
import { RouterModule } from '@angular/router';
import { AccessDeniedComponent } from './Shared/AccessControl/access-denied.component';
import { MessageService } from './Shared/message-box/MessageService';
import { MainPageComponent } from './Advertising/main-page/main-page.component';
import { TenderPageComponent } from './Advertising/tender-page/tender-page.component';
import { NgSelectVirtualScrollComponent } from './Shared/ng-select-virtual-scroll/ng-select-virtual-scroll.component';
import { NgSelectModule } from './Shared/ng-select';
import { CustomCheckBoxComponent } from './Shared/CustomComponent/custom-check-box/custom-check-box.component';
import { CustomCheckboxModule } from './Shared/custom-checkbox/src/public_api';
@NgModule({
  declarations: [
    AppComponent,
    NumberInputComponentComponent,
    GridComponent,
    AccessDeniedComponent,
    TenderPageComponent,
    MainPageComponent,
    CustomCheckBoxComponent,
    NgSelectVirtualScrollComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    CustomCheckboxModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [
    LoadingService,
    MessageService
  ],
  entryComponents: [
    NgSelectVirtualScrollComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
