import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, observable } from 'rxjs';
import { BaseHttpClient } from './BaseHttpClient';
import { JwtHelperService } from 'src/app/Shared/angular-jwt/src';

@Injectable({ providedIn: 'root' })
export class AuthService {
    IsAuth = false;
    constructor(private http: BaseHttpClient) { }
    CheckAuth() {
        const helper = new JwtHelperService();
        const authToken = localStorage.getItem('UserJWTInfo');
        console.log(helper.getTokenExpirationDate(authToken));
        if (authToken && !helper.isTokenExpired(authToken)) {
            return true;
        } else {
            return false;
        }
    }
}
