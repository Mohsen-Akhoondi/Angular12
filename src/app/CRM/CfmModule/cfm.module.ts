import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerOrderListComponent } from '../customer-order-list/customer-order-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule } from 'src/app/Shared/SharedModule/share.module.component';
import { CustomerOrderComponent } from '../customer-order/customer-order.component';
import { CfmOverPopupComponent } from '../cfm-over-popup/cfm-over-popup.component';
import { ProductPatternEntryComponent } from '../product-pattern-entry/product-pattern-entry.component';
import { ProductPatternProductEntryComponent } from '../product-pattern-product-entry/product-pattern-product-entry.component';
import { ProductPatternComponent } from '../product-pattern/product-pattern.component';
//import { TreeModule } from 'angular-tree-component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { CustomerOrderProductRequestComponent } from '../customer-order-product-request/customer-order-product-request.component';
import { CustomerOrderSearchComponent } from '../customer-order-search/customer-order-search.component';
import { InventoryQtyPageComponent } from '../inventory-qty-page/inventory-qty-page.component';
import { CustomerProductRequestPageComponent } from '../customer-product-request-page/customer-product-request-page.component';
import { AddToGroupComponent } from '../add-to-group/add-to-group.component';
import { TextRequestPageComponent } from '../text-request-page/text-request-page.component';
import { CfmWorkflowSendComponent } from '../cfm-workflow-send/cfm-workflow-send.component';
import { CustomerFileComponent } from '../customer-file/customer-file.component';

@NgModule({
  declarations: [
    AddToGroupComponent,
    TextRequestPageComponent,
    CustomerOrderListComponent,
    CustomerOrderComponent,
    CfmOverPopupComponent,
    ProductPatternEntryComponent,
    ProductPatternProductEntryComponent,
    ProductPatternComponent,
    CustomerOrderProductRequestComponent,
    CustomerOrderSearchComponent,
    InventoryQtyPageComponent,
    CustomerProductRequestPageComponent,
    CfmWorkflowSendComponent,
    CustomerFileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    ShareModule,
    MalihuScrollbarModule.forRoot(),
  ],
  exports: [
    AddToGroupComponent,
    TextRequestPageComponent,
    CustomerOrderListComponent,
    CustomerOrderComponent,
    ProductPatternEntryComponent,
    ProductPatternProductEntryComponent,
    ProductPatternComponent,
    CustomerOrderProductRequestComponent,
    CustomerOrderSearchComponent,
    InventoryQtyPageComponent,
    CustomerProductRequestPageComponent,
    CfmWorkflowSendComponent,
    CustomerFileComponent
  ],
})
export class CfmModule { }
