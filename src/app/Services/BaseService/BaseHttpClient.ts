import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/Load/loading/LoadingService';
import { MessageService } from 'src/app/Shared/message-box/MessageService';
import { identifierModuleUrl } from '@angular/compiler';
import { RefreshServices } from './RefreshServices';
import { CommonServices } from './CommonServices';
@Injectable({ providedIn: 'root' })
export class BaseHttpClient {
  count = 0;
  constructor(private http: HttpClient,
    private CommonService: CommonServices,
    private Loading: LoadingService,
    private Message: MessageService,
    private RefreshService: RefreshServices) { }
  ErrorHandelling(err) {
    console.log(err);
    this.count = 0;
    this.Loading.Hide();
    if (err.status === 401) {
      this.RefreshService.RefreshLoginDetails(false);
      $("div").removeClass("disable-parent");
    } else {
      if (err.error && err.error.Message && err.error.Message.includes('child record found')) {
        this.Message.Show('حذف با مشکل مواجه شد . این موجودیت در جای دیگری استفاده شده است.');
      } else if (err.error && err.error.Message && err.error.Message.includes('unique constraint')) {
        this.Message.Show('موجودیت تکراری می باشد.امکان ثبت وجود ندارد.');
      } else if (err.error && err.error.Message && err.error.Message.includes('InvalidOperation')) {
        this.Message.Show('شما مجوز انجام این عملیات را ندارید.');
      } else if (err.error && err.error.Message && err.error.Message.includes('insufficient privileges')) {
        this.Message.Show(' مجوز دسترسی به این موجودیت در پایگاه داده تعریف نشده است.لطفا با راهبر سیستم تماس حاصل نمایید.');
      } else if (err.error && err.error.Message && err.error.Message.includes('|')) {
        const str = err.error.Message.split('|');
        if (str[1]) {
          this.Message.Show(str[1]);
        } else {
          this.Message.Show('خطای پیش بینی نشده ');
        }
      }
      console.log(err.error.Message.split('|'));
      return throwError(err);
    }
  }
  private RefreshToken(authToken) {
    let options = new HttpHeaders({
      'Accept': 'application/json, */*',
      'X-Requested-With': 'XMLHttpRequest'
    });
    options = options.set('Authorization', 'Bearer ' + authToken);
    this.http.get(window.location.origin + '/Account/RefreshToken', { headers: options, params: null }).pipe(
      catchError((err) => {
        return this.ErrorHandelling(err);
      }),
      finalize(() => { this.Loading.Hide(); })
    ).subscribe(res => {
      localStorage.removeItem('UserJWTInfo');
      console.log('Newww Token Iss : ' + res.toString());
      localStorage.setItem('UserJWTInfo', res.toString());
    });
  }
  get(url, params, IsLoading = true): Observable<any> {
    const authToken = localStorage.getItem('UserJWTInfo');
    let options = new HttpHeaders({
      'Accept': 'application/json, */*',
      'X-Requested-With': 'XMLHttpRequest'
    });
    options = options.set('Authorization', 'Bearer ' + authToken);
    if (IsLoading === true) {
      this.count++;
      // console.log('get + ' + this.count +' url = ' + url);
      this.Loading.Show();
    }
    return this.http.get(url, { headers: options, params: params }).pipe(
      catchError((err) => {
        return this.ErrorHandelling(err);
      }),
      finalize(() => {
        this.count--;
        // console.log('post - ' + this.count +' url = ' + url);
        if (this.count <= 0) {
          this.Loading.Hide();
          this.count = 0;
        }
      })
    );
  }

  post(url, body, IsLoading = true): Observable<any> {
    const authToken = localStorage.getItem('UserJWTInfo');
    if (IsLoading === true) {
      this.count++;
      // console.log('post + ' + this.count +' url = ' + url);
      this.Loading.Show();
    }
    let options = new HttpHeaders({
      'Accept': 'application/json, */*',
      'X-Requested-With': 'XMLHttpRequest'
    });
    options = options.set('Authorization', 'Bearer ' + authToken);
    return this.http.post(url, body, { headers: options }).pipe(
      catchError((err) => {
        return this.ErrorHandelling(err);
      }),
      finalize(() => {
        this.count--;
        // console.log('post - ' + this.count +' url = ' + url);
        if (this.count <= 0) {
          this.Loading.Hide();
          this.count = 0;
        }
      })
    );
  }
}
