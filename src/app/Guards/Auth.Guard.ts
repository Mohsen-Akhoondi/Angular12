import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/BaseService/Auth.Service';
import { map , catchError} from 'rxjs/operators';
import { UserSettingsService } from '../Services/BaseService/UserSettingsService';
import { forkJoin } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    CanActive = false;
    constructor(private router: Router, private AAuthService: AuthService, private UserSettings: UserSettingsService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     return forkJoin([
        this.AAuthService.CheckAuth()
       ]).pipe(map(res => {
        if (!res[0]) {
          window.location.href = window.location.origin
                                + '/Account/login?returnUrl=%2FFinance'
                                + state.url.replace('/', '%2F');
        }
        return res[0];
       }));
    }
}
