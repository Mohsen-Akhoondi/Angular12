import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DealsHallService } from 'src/app/Services/ContractService/DealsHall/DealsHallService';
import { forkJoin } from 'rxjs';
import { AuthService } from 'src/app/Services/BaseService/Auth.Service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  btnclicked;
  DealsParam;
  OverStartTopPosition;
  OverPixelWidth;
  BtnClickName = '';
  overStartLeftPosition;
  OverPixelHeight;
  PopupType;
  ContractTenderCount = null;
  ContractAuctionCount = null;
  ContractPublicSaleCount = null;
  ContractLimitedTenderCount = null;
  HoverTender = false;
  HoverAuction = false;
  HoverPublicSale = false;
  HoverLimitedTender = false;
  IsDown = false;
  constructor(
    private AuthServices: AuthService,
    private DealsHall: DealsHallService,
    private router: Router) { }

  ngOnInit() {
    forkJoin([
      this.DealsHall.GetCountContractTender(),
      this.DealsHall.GetCountContractAuction(),
      this.DealsHall.GetCountContractPublicSale()
    ]).subscribe(res => {
      this.ContractTenderCount = res[0];
      this.ContractAuctionCount = res[1];
      this.ContractPublicSaleCount = res[2];
      this.IsDown = true;
      this.LoadLimitedTender();
    });
  }
  LoadLimitedTender() {
      if (!this.AuthServices.CheckAuth()) {
        this.ContractLimitedTenderCount = '-';
      } else {
        this.DealsHall.GetCountContractLimitedTender().subscribe(CountRes => {
          this.ContractLimitedTenderCount = CountRes;
        });
      }
  }
  LimitedTenderClick() {
      if (this.AuthServices.CheckAuth()) {
        this.router.navigate(['/tender-page', { type: 'limited-tender' }]);
        // window.location.href = window.location.origin + '/Finance/tender-page?type=limited-tender';
      } else {
        this.DealsParam = new Object();
        this.DealsParam.HeaderName = 'فرم ورود به سامانه';
        this.overStartLeftPosition = 420;
        this.OverStartTopPosition = 130;
        this.OverPixelWidth = 500;
        this.OverPixelHeight = null;
        this.PopupType = 'login-page';
        this.BtnClickName = 'limited-tender-click';
        this.btnclicked = true;
      }
  }
  popupclosed(param) {
    if (this.PopupType === 'login-page' && param === 'IsLogin') {
      this.router.navigate(['/tender-page', { type: 'limited-tender' }]);
    }
    this.btnclicked = false;
    this.PopupType = null;
  }
}
