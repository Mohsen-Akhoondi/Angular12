import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/BaseService/Auth.Service';
import { map, catchError } from 'rxjs/operators';
import { UserSettingsService } from '../Services/BaseService/UserSettingsService';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AdvertisingGuard implements CanActivate {
  constructor(private router: Router, private AAuthService: AuthService, private UserSettings: UserSettingsService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return environment.IsAdvertising;
  }
}
