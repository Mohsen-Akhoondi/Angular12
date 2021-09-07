import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/Services/BaseService/LoginService';
import { CommonServices } from 'src/app/Services/BaseService/CommonServices';
import { RefreshServices } from 'src/app/Services/BaseService/RefreshServices';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @Output() LoginClosed: EventEmitter<any> = new EventEmitter<any>();
  @Input() IsPopUp;
  CaptchaImage;
  UserName;
  Password;
  RememberMe = false;
  Captcha;
  ErorrList = [];
  CheckValidate = false;
  ShowMessage = false;
  alertMessageParams = { HaveOkBtn: true, message: '', HaveYesBtn: false, HaveNoBtn: false };
  constructor(private LoginServices: LoginService,
    private router: Router,
    private RefreshService: RefreshServices) {
  }

  ngOnInit() {
    this.ReloadCaptcha();
  }
  OnLogin() {
    this.CheckValidate = true;
    this.ErorrList = [];
    if (this.UserName && this.Password && this.Captcha) {
      const LoginModleObject = {
        UserName: this.UserName,
        Password: this.Password,
        RememberMe: this.RememberMe,
        Captcha: this.Captcha,
        HaveVerifySMSCode: false,
        VerifySMSCode: null,
        CachePassword: null
      };
      this.LoginServices.Login(LoginModleObject).subscribe(res => {
       const Result = res as any;
        if (Result) {
          if (Result.ErorrList && Result.ErorrList.length > 0) {
            this.ReloadCaptcha();
            this.ErorrList = Result.ErorrList;
          } else {
            if (Result.AccessToken) {
              localStorage.setItem('UserJWTInfo', Result.AccessToken);
              this.LoginClosed.emit('IsLogin');
            }
            this.RefreshService.RefreshLoginDetails(true);
            if (!this.IsPopUp) {
              this.router.navigate(['']);
            }
          }
        } else {
          this.ReloadCaptcha();
          this.ErorrList.push('ورود کاربر با مشکل مواجه شد');
        }
      });
    }
  }
  ReloadCaptcha() {
    this.LoginServices.GetCaptchaImage().subscribe(res => {
      this.CaptchaImage = res;
    });
  }

}
