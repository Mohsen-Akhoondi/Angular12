import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guards/Auth.Guard';
import { AccessDeniedComponent } from './Shared/AccessControl/access-denied.component';
import { ModalTwoColComponent } from './Shared/modal-two-col/modal-two-col.component';
import { MainPageComponent } from './Advertising/main-page/main-page.component';
import { AdvertisingGuard } from './Guards/Advertising.Guard';
import { TenderPageComponent } from './Advertising/tender-page/tender-page.component';
import { LoginPageComponent } from './Shared/login-page/login-page.component';

const routes: Routes = [
  { path: 'Login', component: LoginPageComponent },
  { path: 'Advertising', component: MainPageComponent, canActivate: [AdvertisingGuard] },
  { path: 'tender-page', component: TenderPageComponent },
  { path: 'Home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'AccessDenid', component: AccessDeniedComponent },
  {
    path: 'PopUp/:ModuleCode/:ModuleName',
    component: ModalTwoColComponent,
    outlet: 'PopUp'
  },
  { path: '**', component: HomeComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [
    [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
