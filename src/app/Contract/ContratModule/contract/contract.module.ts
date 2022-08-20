import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/Shared/SharedModule/share.module';
import { MutualContractInfoComponent } from '../../mutual-contract-info/mutual-contract-info.component';
import { SetMainContractorComponent } from '../../set-main-contractor/set-main-contractor.component';
import { ContractOverPopupComponent } from '../../contract-over-popup/contract-over-popup.component';


@NgModule({
  imports: [
    CommonModule,
    ShareModule,
  ],
  declarations: [
    MutualContractInfoComponent,
    SetMainContractorComponent,
    ContractOverPopupComponent
  ],
  exports: [
    MutualContractInfoComponent,
    SetMainContractorComponent,
    ContractOverPopupComponent
  ]
})
export class ContractModule { }
