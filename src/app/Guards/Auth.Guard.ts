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
    if (this.AAuthService.CheckAuth()) {
        return true;
      } else {
        this.router.navigate([{ outlets: { primary: 'Login', PopUp: null } }]);
        return false;
      }
    }
}
