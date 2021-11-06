import { Component, OnInit } from '@angular/core';
import { UserSettingsService } from '../Services/BaseService/UserSettingsService';
import { Router } from '@angular/router';
import { CommonServices } from '../Services/BaseService/CommonServices';
import { environment } from 'src/environments/environment';
import { AuthService } from '../Services/BaseService/Auth.Service';
import { RefreshServices } from '../Services/BaseService/RefreshServices';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  FullCurrentDate: string;
  SCurrentDate: string;
  MCurrentDate: string;
  FullPersianUserName: string;
  UserImage: string;
  IsLogin = false;
  btnclicked;
  OverStartTopPosition;
  LoginParam;
  OverPixelWidth;
  overStartLeftPosition;
  OverPixelHeight;
  IsAdvertising;
  PopupType;
  constructor(private UserDetail: UserSettingsService, private router: Router,
    private CommonService: CommonServices,
    private AuthServices: AuthService,
    private RefreshService: RefreshServices) { }

  ngOnInit() {
    this.IsAdvertising = environment.IsAdvertising;
    this.AuthServices.CheckAuth().subscribe(res => {
      this.IsLogin = res;
      if (res) {
        this.GetUserInfo();
      } else {
        this.UserDetail.GetDateDetail()
          .subscribe(ures => {
            this.FullCurrentDate = ures.FullCurrentDate;
            this.FullPersianUserName = '';
            this.UserImage = null;
            this.MCurrentDate = ures.MCurrentDate;
            this.SCurrentDate = ures.SCurrentDate;
          });
      }
    });
    this.RefreshService.LoginDetailsChange.subscribe(IsLogin => {
      if (IsLogin) {
        this.GetUserInfo();
      }
      this.IsLogin = IsLogin;
    }
    );
  }
  GetUserInfo() {
    this.UserDetail.GetCurrentUserDetails()
      .subscribe(res => {
        this.FullCurrentDate = res.FullCurrentDate;
        this.FullPersianUserName = res.FullPersianUserName;
        this.UserImage = this.CommonService._arrayBufferToBase64(res.UserImage);
        this.MCurrentDate = res.MCurrentDate;
        this.SCurrentDate = res.SCurrentDate;
      });
  }
  LogOut() {
    if (this.IsLogin) {
      this.UserDetail.LogOutUser().subscribe(res => {
        window.location.href = window.location.origin + '/Account/login';
      });
    } else {
      this.LoginParam = {};
      this.LoginParam.HeaderName = 'فرم ورود به سامانه';
      this.overStartLeftPosition = 420;
      this.OverStartTopPosition = 130;
      this.OverPixelWidth = 500;
      this.OverPixelHeight = null;
      this.PopupType = 'advertising-login';
      this.btnclicked = true;
    }
  }
  popupclosed() {
    this.PopupType = null;
    this.btnclicked = false;
  }
}
